import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface ICard extends TouchableOpacityProps {
  name: string;
  weight: number;
  color: string;
  length: number;
  probability?: string;
}

const Card = ({ name, weight, length, color, probability, ...rest }: ICard) => {
  return (
    <S.Container {...rest}>
      <S.Row>
        <S.Column>
          <S.Title>{name}</S.Title>
          <S.Description>weight: {weight}</S.Description>
          <S.Description>lenght: {length}</S.Description>
          <S.Title>Probabilidade: {probability}</S.Title>
        </S.Column>
      </S.Row>
    </S.Container>
  );
};

export default Card;
