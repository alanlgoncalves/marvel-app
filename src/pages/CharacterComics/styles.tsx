import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ComicContent = styled.View`
  margin: ${Dimensions.get('window').width * 0.08}px;
`;

export const ComicImage = styled.Image`
  height: ${Dimensions.get('window').height * 0.65}px;
  width: ${Dimensions.get('window').width * 0.85}px;
`;

export const ComicTitleText = styled.Text`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;

  max-width: ${Dimensions.get('window').width * 0.84}px;
`;

export const ComicPagesText = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-size: 12px;
`;

export const ActivityIndicatorColumn = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: ${Dimensions.get('window').height * 0.65}px;
`;
