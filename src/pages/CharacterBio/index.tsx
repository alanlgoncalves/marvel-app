import React, { useEffect, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, HeroDescription, HeroImage } from './styles';

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

const CharacterBio: React.FC<Props> = ({ route, navigation }: Props) => {
  const { character } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: character.name,
    });
  }, []);

  const imageUri = useMemo(() => {
    const { path, extension } = character.thumbnail;

    return `${path}.${extension}`;
  }, []);

  return (
    <Container>
      <HeroImage source={{ uri: imageUri }} />
      <HeroDescription>
        {character.description || 'No description available'}
      </HeroDescription>
    </Container>
  );
};

export default CharacterBio;
