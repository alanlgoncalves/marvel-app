import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
`;

export const HeroItem = styled.View`
  flex-direction: row;
  min-height: 78px;
  margin: 5px 0px;
  padding: 0px 10px;
`;

export const HeroAvatarBorder = styled.View`
  width: 82px;
  height: 82px;
  margin-right: 10px;
  border-radius: 50px;
  border-color: #000;
  border-style: solid;
  border-width: 2px;
`;

export const HeroAvatarImage = styled.Image`
  width: 78px;
  height: 78px;
  border-radius: 50px;
  margin-right: 10px;
`;

export const HeroInformation = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HeroNameText = styled.Text`
  font-size: 20px;
  line-height: 23px;
`;

export const ComicsAvailableText = styled.Text`
  font-size: 10px;
  line-height: 14px;
`;

export const HeroItemSeparator = styled.View`
  height: 1px;
  background-color: #ccc;
`;

export const DeleteItemOptions = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const DeleteItem = styled.TouchableOpacity`
  align-items: center;
  flex: 0.5;
  min-height: 82px;
  margin: 5px 0px;
  padding: 0 22px;
  background-color: #880018;
`;
