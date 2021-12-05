FROM node:14-alpine

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}

WORKDIR ${APP_ROOT}

COPY . ${APP_ROOT}

RUN npm install -g serve

RUN npm install

RUN npm run build

EXPOSE 4202

CMD serve -s dist -l 4202