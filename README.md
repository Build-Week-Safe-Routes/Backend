# Backend

- api link: https://protected-badlands-42757.herokuapp.com/api

## Endpoints

- /accident/coords

#### POST

- schema for request body:

```
{
	"LATITUDE": 32,
	"LONGITUD": -85
}
```

- return:

```
[
    {
        "id": 3711,
        "TWAY_ID": "SR-51",
        "TWAY_ID2": "NO SECOND STREET",
        "COUNTY": "SAN MATEO",
        "LATITUDE": "32.61823889",
        "LONGITUD": "-85.37138333",
        "MONTH": 1,
        "DAY": 13,
        "YEAR": 2015,
        "DAY_WEEK": "TUESDAY",
        "LGT_COND": "NIGHT",
        "WEATHER": "CLEAR",
        "WRK_ZONE": 0,
        "FATALS": 1,
        "PEDS": 0,
        "MAN_COLL": "ANGLED",
        "FUNC_SYS": "ARTERY",
        "TYP_INT": "NOT AN INTERSECTION"
    },
    ...
]
```
