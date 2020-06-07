import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, Theme } from '@react-navigation/native';
import MainStack from './routes';

const App: React.FC = () => {
  const theme: Theme = {
    dark: false,
    colors: {
      primary: '#880018',
      background: '#FFFFFF',
      card: '#FFFFFF',
      text: '#000000',
      border: '#FFFFFF',
    },
  };

  return (
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
