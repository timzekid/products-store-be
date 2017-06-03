# PRODUCTS LIST
-----------

## Request

    GET /api/v1/products/


## Response

```javascript

    {
        "status": 1,
        "data": [
            {
                "id"          : "accd97828b241d12d121c1"
                "name"        : "Name",
                "description" : "Description",
                "color"       : "GREEN"
                "createdAt"   : "2017-06-03T17:41:54.457Z"
            },
            {
                "id"          : "accd97828b241d12d121c2"
                "name"        : "Name2",
                "description" : "Description2",
                "color"       : "RED"
                "createdAt"   : "2017-06-03T17:45:54.457Z"
            }
        ],
        "meta": {
            "totalCount": 2,
            "filteredCount": 2,
            "limit": 20,
            "offset": 0
        }
    }

```
