const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const solver = require('./captcha')

const screen = {
    width: 1366,
    height: 768
};

async function indiapost(id) {
    let details;
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless().windowSize(screen))
        .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
        .build();
    try {
        await driver.get('https://www.indiapost.gov.in/_layouts/15/DOP.Portal.Tracking/TrackConsignment.aspx');

        let captcha;

        captcha = await driver.findElements({ className: 'captchamath' })

        if (captcha.length === 0) {
            captcha = await driver.findElements({ className: 'captchaimg' })
        }

        const challenge = await driver.findElement({ id: 'ctl00_PlaceHolderMain_ucNewLegacyControl_ucCaptcha1_lblCaptcha' }).getAttribute('textContent');
        const problem = await captcha[0].findElement(By.tagName('span')).getAttribute('textContent');

        const solution = solver.solveIndiaPostCaptcha(challenge, problem);

        await driver.findElement({ id: "ctl00_PlaceHolderMain_ucNewLegacyControl_txtOrignlPgTranNo" }).sendKeys(id);
        await driver.findElement({ id: "ctl00_PlaceHolderMain_ucNewLegacyControl_ucCaptcha1_txtCaptcha" }).sendKeys(solution.toString());
        await driver.findElement({ id: "ctl00_PlaceHolderMain_ucNewLegacyControl_btnSearch" }).click()

        let detailsTab = await driver.wait(until.elementLocated({ id: 'ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleDtlsOER' }), 10000);
        let detailsData = await detailsTab.findElements({ tagName: 'td' });
        let eventsTab = await driver.wait(until.elementLocated({ id: 'ctl00_PlaceHolderMain_ucNewLegacyControl_gvTrckMailArticleEvntOER' }), 10000);
        let eventsData = await eventsTab.findElements({ tagName: 'td' });
        let status = await driver.findElement({ id: 'ctl00_PlaceHolderMain_ucNewLegacyControl_lblMailArticleCurrentStatusOER' }).getAttribute('textContent');

        status = status.split(" : ")[1];

        details = {
            id: id,
            bookedAt: '',
            bookedOn: '',
            destinationPin: '',
            tariff: '',
            articleType: '',
            destination: '',
            status: status,
            events: []
        }

        for (let i = 0; i < detailsData.length; i++) {
            const el = await detailsData[i].getAttribute('textContent');
            switch (i) {
                case 0:
                    details.bookedAt = el;
                    break;
                case 1:
                    details.bookedOn = el;
                    break;
                case 2:
                    details.destinationPin = el;
                    break;
                case 3:
                    details.tariff = el;
                    break;
                case 4:
                    details.articleType = el;
                    break;
                case 5:
                    details.destination = el;
                    break;
                default:
                    break;
            }
        }

        details.bookedOn = details.bookedOn.split(" ")[0].split('/').reverse().join("-") + "T" + details.bookedOn.split(" ")[1];

        for (let i = 0; i < eventsData.length; i = i + 4) {
            const event = {
                timestamp: '',
                location: '',
                event: ''
            }
            for (let j = i; j < i + 4; j++) {
                const el = await eventsData[j].getAttribute('textContent');
                switch (j) {
                    case i:
                        event.timestamp = el.split('/').reverse().join('-');
                        break;
                    case i + 1:
                        event.timestamp = event.timestamp + "T" + el;
                        break;
                    case i + 2:
                        event.location = el;
                        break;
                    case i + 3:
                        event.event = el;
                        break;
                }
            }
            details.events.push(event);
        }
    }
    finally {
        driver.quit();
    }

    return details;
}

module.exports = {
    indiapost
}