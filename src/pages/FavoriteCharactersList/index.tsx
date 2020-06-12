import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { SwipeListView } from 'react-native-swipe-list-view';
import { TouchableNativeFeedback } from 'react-native';
import { useTheme } from '../../hooks/Theme';
import { useFavorites } from '../../hooks/FavoriteCharacters';
import { Character } from '../../models/Characters';
import {
  ComicsAvailableText,
  Content,
  DeleteItem,
  DeleteItemOptions,
  HeroAvatarBorder,
  HeroAvatarImage,
  HeroInformation,
  HeroItem,
  HeroItemSeparator,
  HeroNameText,
} from './styles';

const FavoriteCharactersList: React.FC = () => {
  const navigator = useNavigation();

  const { colors } = useTheme();
  const { favoriteCharacters, addRemoveCharacter } = useFavorites();

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <TouchableNativeFeedback
          key={item.id}
          onPress={() => {
            navigator.navigate('CharacterTabs', { character: item });
          }}
        >
          <HeroItem style={{ backgroundColor: colors.background }}>
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
        </TouchableNativeFeedback>
      );
    },
    [colors, navigator],
  );

  const renderHiddenOptions = useCallback(
    ({ item }) => {
      return (
        <DeleteItemOptions>
          <DeleteItem
            style={{ flexDirection: 'row' }}
            onPress={() => {
              addRemoveCharacter(item);
            }}
          >
            <Icon name="trash-2" color="#fff" size={30} />
          </DeleteItem>
          <DeleteItem
            style={{ flexDirection: 'row-reverse' }}
            onPress={() => {
              addRemoveCharacter(item);
            }}
          >
            <Icon name="trash-2" color="#fff" size={30} />
          </DeleteItem>
        </DeleteItemOptions>
      );
    },
    [colors, addRemoveCharacter],
  );

  const renderSeparator = useCallback(() => {
    return <HeroItemSeparator />;
  }, [colors]);

  return (
    <Content>
      <SwipeListView<Character>
        data={favoriteCharacters}
        ItemSeparatorComponent={renderSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        renderHiddenItem={renderHiddenOptions}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </Content>
  );
};
export default FavoriteCharactersList;
