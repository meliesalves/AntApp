import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{ color: string }>`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  margin-top: 16px;
  justify-content: center;
  margin: 0 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: "Poppins_700Bold";
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: "Poppins_400Regular";
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const Column = styled.View``;
