import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CharacterBottomNavigationBar from './character.routes';
import { MainBottomNavigationBar } from './main.routes';
import { useTheme } from '../hooks/Theme';

const MainStackNavigator = createStackNavigator();

const Routes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer theme={theme}>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen
          name="MainTabs"
          component={MainBottomNavigationBar}
          options={{
            headerShown: false,
          }}
        />
        <MainStackNavigator.Screen
          name="CharacterTabs"
          component={CharacterBottomNavigationBar}
          options={{
            headerShown: false,
          }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
