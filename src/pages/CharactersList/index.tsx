import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
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
  HeroSearch,
  HeroSearchInput,
} from './styles';
import { useTheme } from '../../hooks/Theme';
import { Character } from '../../models/Characters';

const CharactersList: React.FC = () => {
  const navigator = useNavigation();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [searchCharacters, setSearchCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const { theme, colors } = useTheme();

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

  const clearSearch = useCallback(() => {
    setSearchName('');
  }, []);

  const loadSearchCharacters = useCallback(() => {
    if (searchName.trim()) {
      setLoading(true);

      api
        .get('/v1/public/characters', {
          params: {
            ...apiKey,
            limit: 30,
            offset: 0,
            nameStartsWith: searchName,
          },
        })
        .then((response) => {
          setSearchCharacters([...response.data.data.results]);
        })
        .catch(() => {
          Alert.alert('Error on load characters from name');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchName, setLoading]);

  useEffect(() => {
    loadSearchCharacters();
  }, [searchName]);

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
      return <View />;
    }

    return (
      <ActivityIndicator
        color={colors.text}
        style={{ marginBottom: 20, marginTop: 20 }}
      />
    );
  }, [loading]);

  return (
    <Content>
      <HeroSearch>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon name="search" color={colors.text} size={20} />
          <HeroSearchInput
            placeholder="Type your character name here"
            placeholderTextColor={theme.dark ? '#FFF' : '#CCC'}
            onChangeText={(name: string) => setSearchName(name)}
            value={searchName}
            style={{ color: colors.text }}
          />
          {!!searchName && (
            <Icon name="x" color={'#880018'} size={20} onPress={clearSearch} />
          )}
        </View>
      </HeroSearch>

      {!!searchName.trim() && (
        <FlatList<Character>
          style={{ flex: 0.91 }}
          data={searchCharacters}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderLoadingFooter}
        />
      )}

      {!searchName.trim() && (
        <FlatList<Character>
          style={{ flex: 0.93 }}
          data={characters}
          ItemSeparatorComponent={renderSeparator}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={renderLoadingFooter}
          onEndReached={loadNextCharacters}
          onEndReachedThreshold={0.3}
        />
      )}
    </Content>
  );
};
export default CharactersList;
