# MARVEL-APP
[![Build Status](https://travis-ci.com/alanlgoncalves/gobarber-web.svg?branch=master)](https://travis-ci.com/alanlgoncalves/gobarber-web)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=alanlgoncalves_marvel-app&metric=security_rating)](https://sonarcloud.io/dashboard?id=alanlgoncalves_marvel-app)

This project is an APP developed to show the Marvel characters information using the open [Marvel API](https://developer.marvel.com/).

## Functionalities
- Infinity scrollable characters order by name
- Search characters by name
- Character description (If available)
- Character comics list with cover (If available)
- Favorite characters list
    - Character exclusion using swipe list item from right or left
- Light/Dark themes

![Marvel APP - IOS](https://user-images.githubusercontent.com/8467311/84600758-0d2fa900-ae52-11ea-86bd-a305892d812e.gif)
![Marvel APP - Android](https://user-images.githubusercontent.com/8467311/84600745-fb4e0600-ae51-11ea-9ede-6ab86f52c70d.gif)


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

To run this project, you will need the dependencies bellow:

- Marvel API keys. Click [here](https://developer.marvel.com/) and select "Get a Key" to get a key!
- Android SDK installed with a configured emulator
- XCode installed with a configured emulator **(macOS only)**

Set the Marvel API keys on the file `marvel-app/src/config/api-key.ts`

```
import md5 from 'md5';

const ts = 'marvel-api';
const publicKey = 'public_key';
const privateKey = 'private_key';
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;
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

## Other information

### Figma Project

This project was developed using a
[Figma draft](https://www.figma.com/file/4qoQyrVexARGzcAgMUTJEI/Marvel-APP?node-id=0%3A1) made by me.
