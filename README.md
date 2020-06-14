# MARVEL-APP
[![Build Status](https://travis-ci.com/alanlgoncalves/gobarber-web.svg?branch=master)](https://travis-ci.com/alanlgoncalves/gobarber-web)

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


