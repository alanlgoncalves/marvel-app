# MARVEL-APP
[![Build Status](https://travis-ci.com/alanlgoncalves/gobarber-web.svg?branch=master)](https://travis-ci.com/alanlgoncalves/gobarber-web)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=security_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)

This project is an APP developed to show the Marvel characters information using the open Marvel API

## Technologies
- Typescript
- React Native
- React Nagivation
- React Vector Icons
- Styled-Components
- Axios
- MD5

## Formatters

- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

# Project Startup

To run this project, you will need a Marvel API key. Click [here](https://developer.marvel.com/) and select "Get a Key" to get a key!

Set the keys on the file `marvel-app/src/config/api-key.ts`

```
const apiKey = {
  ts: 'marvel-api',
  apikey: 'public_key',
  hash: md5('marvel-api' + 'private_key' + 'public_key'),
};
```

If you are using NPM run:

```
$ npm install

$ npm run android
$ npm run ios
```

If you are using YARN run:

```
$ yarn install

$ yarn run android
$ yarn run ios
```


