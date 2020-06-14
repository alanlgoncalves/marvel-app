import React, { useEffect, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, HeroDescription, HeroImage } from './styles';
import { useTheme } from '../../hooks/Theme';
import { Character } from '../../models/Characters';
import { useFavorites } from '../../hooks/FavoriteCharacters';

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

type NavigationHeader = {
  tintColor?: string | undefined;
};

const CharacterBio: React.FC<Props> = ({ route, navigation }: Props) => {
  const { character } = route.params;
  const { colors } = useTheme();
  const { favoriteCharacters, addRemoveCharacter } = useFavorites();

  const characterFavorite = useMemo(() => {
    const index = favoriteCharacters.findIndex(
      (item) => character.id === item.id,
    );

    if (index >= 0) {
      return true;
    }

    return false;
  }, [favoriteCharacters]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: character.name,
      headerRight: ({ tintColor }: NavigationHeader): React.ReactNode => (
        <TouchableOpacity onPress={() => addRemoveCharacter(character)}>
          <Icon
            name={characterFavorite ? 'star' : 'star-o'}
            size={20}
            color={tintColor}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [addRemoveCharacter]);

  const imageUri = useMemo(() => {
    const { path, extension } = character.thumbnail;

    return `${path}.${extension}`;
  }, []);

  return (
    <Container>
      <HeroImage source={{ uri: imageUri }} />
      <HeroDescription style={{ color: colors.text }}>
        {character.description || 'No description available'}
      </HeroDescription>
    </Container>
  );
};

export default CharacterBio;
