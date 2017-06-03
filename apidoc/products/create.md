# PRODUCTS CREATE
-------------

## Request

    POST /api/v1/products

```javascript

    {
        "data": {
            "name"        : "Name",
            "description" : "Description",
            "color"       : "GREEN"
        }
    }

```

## Response

```javascript

    {
        "status": 1,
        "data": {
            "id"          : "accd97828b241d12d121c1"
            "name"        : "Name",
            "description" : "Description",
            "color"       : "GREEN"
            "createdAt"   : "2017-06-03T17:41:54.457Z"
        }
    }

```
