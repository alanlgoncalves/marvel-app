# MARVEL-APP
[![Build Status](https://travis-ci.com/alanlgoncalves/gobarber-web.svg?branch=master)](https://travis-ci.com/alanlgoncalves/gobarber-web)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=security_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)

This project is an APP developed to show the Marvel characters information using the open Marvel API

## Functionalities
- Infinity scrollable characters order by name
- Search characters by name
- Character description (If available)
- Character comics list with cover (If available)
- Favorite characters list
    - Character exclusion using swipe list item from right or left
- Light/Dark themes

![IOS](https://media.giphy.com/media/j72tfOVt66yUFmj6nH/giphy.gif)
![Android](https://media.giphy.com/media/iHsNjwuiaRdU6u6hVG/giphy.gif)


## Technologies
- Typescript
- React Native
- React Navigation
- React Native Paper
- React Vector Icons
- Styled-Components
- Async Storage
- Axios
- MD5

## Formatters

- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Project Startup

To run this project, you will need the dependencies belloy:

- Marvel API keys. Click [here](https://developer.marvel.com/) and select "Get a Key" to get a key!
- Android SDK installed with a configured emulator
- XCode installed with a configured emulator **(macOS only)**

Set the Marvel API keys on the file `marvel-app/src/config/api-key.ts`

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


