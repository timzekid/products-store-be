# PRODUCTS UPDATE
-------------

## Request

    PUT /api/v1/products/:id

```javascript

    {
        "data": {
            "name"        : "New name",
            "description" : "New description",
            "color"       : "BLUE"
        }
    }

```

## Response

```javascript

    {
        "status": 1,
        "data": {
            "id"          : "accd97828b241d12d121c1"
            "name"        : "New name",
            "description" : "New description",
            "color"       : "BLUE",
            "createdAt"   : "2016-02-23T13:41:54.457Z"
        }
    }

```
