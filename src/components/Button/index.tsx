import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface IButton extends TouchableOpacityProps {
  title: string;
  titleColor: string;
  color?: string;
  inverted?: boolean;
}

const Button = ({ title, titleColor, color, inverted, ...rest }: IButton) => {
  return (
    <S.Container inverted={inverted} color={color} {...rest}>
      <S.Title titleColor={titleColor}>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
