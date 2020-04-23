# India Post Consignment Tracker API


[![Selenium](https://img.shields.io/github/package-json/dependency-version/RohithCIS/consignment-tracker/selenium-webdriver)]()
[![License: WTFPL](https://img.shields.io/badge/license-WTFPL-blue)](http://www.wtfpl.net/)
[![Contributors](https://img.shields.io/github/contributors/RohithCIS/consignment-tracker)]()
[![Last Commit](https://img.shields.io/github/last-commit/RohithCIS/consignment-tracker)]()
[![Last Commit](https://img.shields.io/badge/PRs-welcome-brightgreen)]()
[![Last Commit](https://img.shields.io/github/forks/RohithCIS/consignment-tracker?label=forks)]()

### Description
Scrapes the Courier Sites to obtain consignment tracking data.

- Unofficial
- RESTful JSON API
- No Captcha

### Supports

Supports only India Post Currently

### Usage

- `npm install` to install dependencies
- `npm run dev` to start server

```json
// GET http://localhost:3000/track/indiapost/:id

{
  "id": "ET169145475IN",
  "bookedAt": "Sholingur SO",
  "bookedOn": "2020-04-20T11:02:16",
  "destinationPin": "631003",
  "tariff": "76.70",
  "articleType": "Inland Speed Post",
  "destination": "Jothinagar SO",
  "status": "Item Bagged ",
  "events": [
    {
      "timestamp": "2020-04-20T14:29:42",
      "location": "Sholingur SO",
      "event": "Item Bagged "
    },
    {
      "timestamp": "2020-04-20T11:02:16",
      "location": "Sholingur SO",
      "event": "Item Booked "
    }
  ]
}
```

### To Do
- Captcha Solver fails occasionally - Fix it
- Dockerise

### License

Licensed under the [WTFPL License](http://www.wtfpl.net/)