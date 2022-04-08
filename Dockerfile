FROM node:10-alpine
USER root

RUN apk add --update alpine-sdk
RUN apk add --no-cache curl gnupg git yarn python make
RUN npm install -g ember-cli@3.1.0

RUN mkdir /app
WORKDIR /app
RUN yarn install

EXPOSE 4200
CMD ["ember", "s", "--environment=master"]