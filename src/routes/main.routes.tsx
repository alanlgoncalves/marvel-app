import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CharactersList from '../pages/CharactersList';
import AppInfo from '../pages/AppInfo';

const MainTab = createMaterialBottomTabNavigator();
const CharactersListStackNavigator = createStackNavigator();
const InfoStackNavigator = createStackNavigator();

const CharactersListStack: React.FC = () => {
  return (
    <CharactersListStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#880018',
        },
      }}
    >
      <CharactersListStackNavigator.Screen
        name="Characters"
        component={CharactersList}
        options={{ headerTitle: 'Characters' }}
      />
    </CharactersListStackNavigator.Navigator>
  );
};

const AppInfoStack: React.FC = () => {
  return (
    <InfoStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#880018',
        },
      }}
    >
      <CharactersListStackNavigator.Screen
        name="AppInfo"
        component={AppInfo}
        options={{ headerTitle: 'APP Info' }}
      />
    </InfoStackNavigator.Navigator>
  );
};

export const MainBottomNavigationBar: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#880018" />
      <MainTab.Navigator
        initialRouteName="Main"
        shifting={!!1}
        sceneAnimationEnabled={false}
        backBehavior="none"
      >
        <MainTab.Screen
          name="Characters"
          component={CharactersListStack}
          options={{
            tabBarLabel: 'Characters',
            tabBarIcon: ({ color }) => (
              <Icon name="list" color={color} size={24} />
            ),
          }}
        />
        <MainTab.Screen
          name="AppInfo"
          component={AppInfoStack}
          options={{
            tabBarLabel: 'AppInfo',
            tabBarIcon: ({ color }) => (
              <Icon name="info" color={color} size={24} />
            ),
          }}
        />
      </MainTab.Navigator>
    </>
  );
};
