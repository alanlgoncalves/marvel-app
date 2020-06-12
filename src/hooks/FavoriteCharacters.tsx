import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import { Character } from '../models/Characters';

interface FavoriteCharactersContextData {
  favoriteCharacters: Character[];

  addRemoveCharacter(character: Character): Promise<void>;
}

const FavoriteCharactersContext = createContext<FavoriteCharactersContextData>(
  {} as FavoriteCharactersContextData,
);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>(
    [] as Character[],
  );

  const addCharacter = useCallback(
    (character: Character): void => {
      const findCharacter = favoriteCharacters.find(
        (item) => item.id === character.id,
      );

      if (!findCharacter) {
        const sortedCharacters = [...favoriteCharacters, character].sort(
          function (a, b) {
            return a.name.localeCompare(b.name);
          },
        );

        setFavoriteCharacters(sortedCharacters);
      }

      Toast.showWithGravity(
        'Character add on favorites',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    },
    [favoriteCharacters, setFavoriteCharacters],
  );

  const removeCharacter = useCallback(
    (id: number): void => {
      const filteredCharacters = favoriteCharacters.filter(
        (character) => character.id !== id,
      );

      setFavoriteCharacters(filteredCharacters);

      Toast.showWithGravity(
        'Character removed from favorites',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    },
    [favoriteCharacters, setFavoriteCharacters],
  );

  const addRemoveCharacter = useCallback(
    async (character: Character): Promise<void> => {
      const findCharacter = favoriteCharacters.find(
        (item) => item.id === character.id,
      );

      if (!findCharacter) {
        addCharacter(character);
      } else {
        removeCharacter(character.id);
      }

      const sortedCharacters = [...favoriteCharacters, character].sort(
        function (a, b) {
          return a.name.localeCompare(b.name);
        },
      );

      await AsyncStorage.setItem(
        '@MarvelApp:favorite_characters',
        JSON.stringify(sortedCharacters),
      );
    },
    [favoriteCharacters, addCharacter, removeCharacter],
  );

  useEffect(() => {
    async function loadFavoritesFromStorage(): Promise<void> {
      const favoritesCharactersJSON = await AsyncStorage.getItem(
        '@MarvelApp:favorite_characters',
      );

      if (favoritesCharactersJSON) {
        setFavoriteCharacters(JSON.parse(favoritesCharactersJSON));
      } else {
        setFavoriteCharacters([]);
      }
    }

    loadFavoritesFromStorage();
  }, []);

  return (
    <FavoriteCharactersContext.Provider
      value={{
        favoriteCharacters,
        addRemoveCharacter,
      }}
    >
      {favoriteCharacters !== null && children}
    </FavoriteCharactersContext.Provider>
  );
};

export function useFavorites(): FavoriteCharactersContextData {
  const context = useContext(FavoriteCharactersContext);

  if (!context) {
    throw new Error(
      'useFavorites must be used within an FavoriteCharactersProvider',
    );
  }

  return context;
}
