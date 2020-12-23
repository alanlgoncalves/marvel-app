import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import CharacterBottomNavigationBar from './character.routes';
import { MainBottomNavigationBar } from './main.routes';
import { useTheme } from '../hooks/Theme';

const MainStackNavigator = createSharedElementStackNavigator();

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
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { character } = route.params;
            return [`item.${character.id}.photo`];
          }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
