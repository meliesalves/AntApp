import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface ICard extends TouchableOpacityProps {
  name: string;
  weight: string;
  color: string;
  length: string;
}

const Card = ({ name, weight, length, color, ...rest }: ICard) => {
  return (
    <S.Container {...rest}>
      <S.Row>
        <S.Column>
          <S.Title>{name}</S.Title>
          <S.Description>{weight}</S.Description>
          <S.Description>{length}</S.Description>
        </S.Column>
      </S.Row>
    </S.Container>
  );
};

export default Card;
