FROM node:12.16.1-alpine

LABEL name="test-Backend"

WORKDIR . /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

RUN npm run build

COPY . .

EXPOSE 4201

CMD npm start