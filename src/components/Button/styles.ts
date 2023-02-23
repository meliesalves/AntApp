import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  color: string;
  inverted?: boolean;
}>`
  width: 100%;
  height: 50px;
  background-color: ${({ color, inverted }) =>
    inverted ? "transparent" : color};
  align-items: center;
  border: ${({ inverted, color }) =>
    inverted ? `1px ${color}` : `0 transparent`};
  justify-content: center;
  border-radius: 100px;
`;

export const Title = styled.Text<{ titleColor: string }>`
  font-size: 16px;
  font-family: "Poppins_700Bold";
  color: ${({ titleColor }) => titleColor};
`;

export const NavButton = styled.TouchableOpacity``;
