const axios = require('axios');

async function tpcindia(cno) {
    const res = await axios.get(`http://tpcindia.com/TPCWebService/TrackMobDe.ashx?podno=${cno}`);
    let data = res.data;
    let tracking = { trackingNumber: cno, courier: 'The Professional Couriers' };
    let status = data.split('Forwarding Details : \r\n  ')
    tracking = { status: status[0].includes('delivered') ? 'Delivered' : 'In Transit', ...tracking }
    let activities = status[1].split('   \r\n  \r\n  ');
    const actarray = []
    for (let i = 0; i < activities.length; i++) {
        const act = activities[i].split('   \r\n  ');
        actarray[i] = {
            timestamp: act[0].split("    Time : ").join(' ').split('/').join('-'),
            place: act[1].split(" : ")[1],
            forwardingNumber: act[2].split(" : ")[1],
            activity: act[3].slice(11),
        }
    }
    tracking = { ...tracking, activities: actarray }
    return tracking;
}

module.exports = {
    tpcindia
}