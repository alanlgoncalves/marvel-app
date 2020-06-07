import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterBottomNavigationBar from './character.routes';
import { MainBottomNavigationBar } from './main.routes';

const MainStackNavigator = createStackNavigator();

const MainStack: React.FC = () => {
  return (
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
  );
};

export default MainStack;
