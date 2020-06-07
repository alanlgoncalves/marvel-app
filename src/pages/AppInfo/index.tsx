import React from 'react';
import { Image, Linking } from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
} from './styles';

import avengerLogo from '../../assets/images/avengers-logo.png';

const AppInfo: React.FC = () => {
  return (
    <Container>
      <Image source={avengerLogo} />
      <DevNameText>ALAN SANTOS</DevNameText>
      <AppDescriptionText>
        This app was developed using Marvel API and React Native
      </AppDescriptionText>
      <WebSiteLinkText
        onPress={() => Linking.openURL('https://alansantos.dev')}
      >
        https://alansantos.dev
      </WebSiteLinkText>
    </Container>
  );
};

export default AppInfo;
