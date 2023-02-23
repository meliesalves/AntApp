import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: "Poppins_700Bold";
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Column = styled.View``;

export const List = styled.FlatList``;

export const ContainerButton = styled.View`
  padding: 24px 24px ${getStatusBarHeight()}px 24px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: 0;
  position: absolute;
  width: 100%;
`;

export const ContainerButtonModal = styled.View`
  padding: 8px 24px;
`;
