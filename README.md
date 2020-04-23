# India Post Consignment Tracker API

[![](https://images.microbadger.com/badges/commit/RohithCIS/consignment-tracker.svg)](https://microbadger.com/images/RohithCIS/consignment-tracker) [![License: WTFPL](https://img.shields.io/badge/license-WTFPL-blue)](http://www.wtfpl.net/)

### Description
Scrapes the Courier Sites to obtain consignment tracking data.

- Unofficial
- JSON API
- No Captcha

### Supports

Supports only India Post Currently

### Sample Output

```json
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
- Express Server for API EndPoints
- Captcha Solver fails occasionally - Fix it
- Dockerise

### License

Licensed under the [WTFPL License](http://www.wtfpl.net/)