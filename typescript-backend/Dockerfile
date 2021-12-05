FROM node:12.16.1-alpine

LABEL name="test-Backend"

WORKDIR . /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4201

CMD npm start