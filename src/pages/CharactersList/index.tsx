import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import apiKey from '../../config/api-key';
import api from '../../services/api';
import {
  ComicsAvailableText,
  Content,
  HeroAvatarBorder,
  HeroAvatarImage,
  HeroInformation,
  HeroItem,
  HeroItemSeparator,
  HeroNameText,
} from './styles';
import { useTheme } from '../../hooks/Theme';

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

const CharactersList: React.FC = () => {
  const navigator = useNavigation();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { colors } = useTheme();

  const loadNextCharacters = useCallback(() => {
    setLoading(true);

    api
      .get('/v1/public/characters', {
        params: {
          ...apiKey,
          limit: 30,
          offset: characters.length,
        },
      })
      .then((response) => {
        setCharacters([...characters, ...response.data.data.results]);
      })
      .catch(() => {
        Alert.alert('Error on load new Characters');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [characters]);

  useEffect(() => {
    AsyncStorage.getItem('@MarvelApp:characters').then((charactersJson) => {
      if (charactersJson === null) {
        loadNextCharacters();
        return;
      }

      setCharacters(JSON.parse(charactersJson));
    });
  }, []);

  useEffect(() => {
    const storageCharacters = AsyncStorage.setItem(
      '@MarvelApp:characters',
      JSON.stringify(characters),
    );

    Promise.resolve(storageCharacters);
  }, [characters]);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <HeroItem
          key={item.id}
          onPress={() => {
            navigator.navigate('CharacterTabs', { character: item });
          }}
        >
          <HeroItemSeparator />
          <HeroAvatarBorder style={{ borderColor: colors.border }}>
            <HeroAvatarImage
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
          </HeroAvatarBorder>
          <HeroInformation>
            <HeroNameText style={{ color: colors.text }}>
              {item.name}
            </HeroNameText>
            {!!item.description && (
              <ComicsAvailableText style={{ color: colors.text }}>
                Description available
              </ComicsAvailableText>
            )}
            {!item.description && (
              <ComicsAvailableText style={{ color: colors.text }}>
                Description not available
              </ComicsAvailableText>
            )}
            <ComicsAvailableText style={{ color: colors.text }}>
              {`Comics: ${item.comics.available}`}
            </ComicsAvailableText>
          </HeroInformation>
        </HeroItem>
      );
    },
    [colors, navigator],
  );

  const renderSeparator = useCallback(() => {
    return <HeroItemSeparator />;
  }, []);

  const renderLoadingFooter = useCallback(() => {
    if (!loading) {
      return null;
    }

    return <ActivityIndicator style={{ marginBottom: 20 }} />;
  }, [loading]);

  return (
    <Content>
      <FlatList<Character>
        data={characters}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderLoadingFooter}
        onEndReached={loadNextCharacters}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
      />
    </Content>
  );
};
export default CharactersList;
