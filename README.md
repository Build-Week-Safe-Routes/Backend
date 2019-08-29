# Backend

- api link: https://protected-badlands-42757.herokuapp.com/api

## Endpoints

- /api/accidents/coords

#### POST

- schema for request body: range (40.50398611, -74.24750278) to (41.13000556, -71.86688333)

```
{
	"LATITUDE": 40.8,
	"LONGITUD": -73.6
}
```

- return: range about 2.5 mile radius

```
[
    {
        "id": 15215,
        "TWAY_ID": "OCEAN PKY",
        "TWAY_ID2": "AVE T",
        "COUNTY": "NEW YORK CITY",
        "LATITUDE": "41.00000000",
        "LONGITUD": "-74.00000000",
        "MONTH": 9,
        "DAY": 15,
        "YEAR": 2014,
        "DAY_WEEK": "TUESDAY",
        "LGT_COND": "NIGHT",
        "WEATHER": "CLEAR",
        "WRK_ZONE": 0,
        "FATALS": 1,
        "PEDS": 0,
        "MAN_COLL": "ANGLE",
        "FUNC_SYS": "UNKNOWN",
        "TYP_INT": "FOUR-WAY",
        "STATE": "NEW YORK",
        "FUNC_SYS_NUM": 0,
        "TYP_INT_NUM": 2,
        "MAN_COLL_NUM": 6
    },
    ...
]
```
