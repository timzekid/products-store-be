FROM node:6.9

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN cp etc/config.json.sample etc/config.json
RUN npm install

CMD npm run nodemon
