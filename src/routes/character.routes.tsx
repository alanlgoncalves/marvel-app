import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import CharacterBio from '../pages/CharacterBio';
import CharacterComics from '../pages/CharacterComics';
import { useTheme } from '../hooks/Theme';

const CharacterTab = createMaterialBottomTabNavigator();
const CharacterBioStackNavigator = createStackNavigator();
const CharacterComicsStackNavigator = createStackNavigator();

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
}

type RootStackParamList = {
  Home: undefined;
  Profile: {
    character: Character;
    screen: React.FC;
  };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const CharacterBioStack: React.FC<Props> = ({ route, navigation }: Props) => {
  const { colors } = useTheme().theme;

  return (
    <CharacterBioStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <CharacterBioStackNavigator.Screen
        name="CharacterBio"
        component={CharacterBio}
        initialParams={route.params}
        options={{
          headerTitle: 'Character',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={20}
                color="#fff"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </CharacterBioStackNavigator.Navigator>
  );
};

const CharacterComicsStack: React.FC<Props> = ({
  route,
  navigation,
}: Props) => {
  const { colors } = useTheme();

  return (
    <CharacterComicsStackNavigator.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <CharacterComicsStackNavigator.Screen
        name="CharacterComics"
        component={CharacterComics}
        initialParams={route.params}
        options={{
          headerTitle: 'Comics',
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={20}
                color={tintColor}
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </CharacterComicsStackNavigator.Navigator>
  );
};

const CharacterBottomNavigationBar: React.FC<Props> = ({ route }: Props) => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <CharacterTab.Navigator
        sceneAnimationEnabled={false}
        shifting={!!1}
        backBehavior="none"
      >
        <CharacterTab.Screen
          name="CharacterBioTab"
          component={CharacterBioStack}
          initialParams={route.params}
          options={{
            tabBarLabel: 'Character',
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={24} />
            ),
          }}
        />
        <CharacterTab.Screen
          name="CharacterComicsTab"
          component={CharacterComicsStack}
          initialParams={route.params}
          options={{
            tabBarLabel: 'Comics',
            tabBarIcon: ({ color }) => (
              <Icon name="book-open" color={color} size={24} />
            ),
          }}
        />
      </CharacterTab.Navigator>
    </>
  );
};

export default CharacterBottomNavigationBar;
