# Products Store

This is the back-end part of the project. Front-end part and description is [here](https://github.com/yaDaryStil/products-store-ui)


Run development version
```
npm install
cp etc/config.json.sample etc/config.json
mongod
npm run nodemon
```

Run production version
```
npm install
cp etc/config.json.sample etc/config.json
mongod
nmp start
```

##### To view API documentation go to [http://localhost:8080/apidoc](http://localhost:8080/apidoc)

---
### Run using Docker

If you have any troubles running the app, then try to do it using [Docker](https://www.docker.com/). It's the simplest way to run anything

First make sure you've [installed Docker](https://docs.docker.com/engine/installation/#supported-platforms) properly corresponding to your OS.

After that run the following command in *products-store-be* folder

```sh
$ docker-compose up
```

To completely shut docker containers down run following commands (or just press Ctrl + C in the same terminal tab)

```sh
$ docker-compose stop
$ docker-compose rm
```
