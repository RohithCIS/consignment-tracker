# Courier Consignment Tracker API

[![License: WTFPL](https://img.shields.io/badge/license-WTFPL-blue)](http://www.wtfpl.net/)
[![Contributors](https://img.shields.io/github/contributors/RohithCIS/consignment-tracker)]()
[![Last Commit](https://img.shields.io/github/last-commit/RohithCIS/consignment-tracker)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()
[![Forks](https://img.shields.io/github/forks/RohithCIS/consignment-tracker?label=forks)]()

### Description
Scrapes the Courier Sites to obtain consignment tracking data.

- Unofficial
- RESTful JSON API

### Supports

- The Professional Couriers

### Usage

- `npm install` to install dependencies
- `npm run dev` to start server

```json
// GET http://localhost:3000/track/:courier/:id

{
    "status": "In Transit",
    "trackingNumber": "AKM1031506",
    "courier": "The Professional Couriers",
    "activities": [
        {
            "timestamp": "09-01-2021 13:00:47",
            "place": "Tirunelveli",
            "forwardingNumber": "DTVL612134",
            "activity": "Out for Delivery - Area : PPMA"
        },
        {
            "timestamp": "09-01-2021 13:00:47",
            "place": "Tirunelveli",
            "forwardingNumber": "DTVLDTVL6121340",
            "activity": "Out for Delivery - Area : Tirunelveli"
        },
        {
            "timestamp": "09-01-2021 10:13:52",
            "place": "Tirunelveli",
            "forwardingNumber": "MMAKM704949",
            "activity": "Received at Tirunelveli"
        },
        {
            "timestamp": "09-01-2021 10:13:52",
            "place": "Tirunelveli",
            "forwardingNumber": "MTVL704949     ",
            "activity": "Received at Tirunelveli"
        },
        {
            "timestamp": "08-01-2021 20:01:00",
            "place": "Tirunelveli",
            "forwardingNumber": "MAKM704949",
            "activity": "Despatched to Tirunelveli"
        }
    ]
}
```

### License

Licensed under the [WTFPL License](http://www.wtfpl.net/)