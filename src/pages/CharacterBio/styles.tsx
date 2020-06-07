import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const HeroImage = styled.Image`
  height: ${Dimensions.get('window').width - 60}px;
  width: ${Dimensions.get('window').width}px;
`;

export const HeroDescription = styled.Text`
  flex: 1;
  width: 100%;

  font-size: 18px;
  line-height: 21px;
  margin-top: 20px;
  padding: 0 20px;
  text-align: justify;
`;
