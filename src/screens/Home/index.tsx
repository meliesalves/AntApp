import React, { useLayoutEffect } from "react";

import Feather from "@expo/vector-icons/Feather";

import Button from "@src/components/Button";
import theme from "theme";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NavButton } from "components/Button/styles";
import Card from "components/Card";

const Home: React.FC = () => {
  const navigation = useNavigation();
  // if (loading) {
  //   return (
  //     <S.ContainerLoading>
  //       <ActivityIndicator color={theme.colors.gray_light} size="large" />
  //     </S.ContainerLoading>
  //   );
  // }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Formigas",
    });
  }, [navigation]);

  return (
    <S.Container>
      <Card color="black" name="Test" weight="teste" length="teste" />

      <S.ContainerButton>
        <Button
          title="Iniciar corrida"
          color={theme.colors.secondary}
          titleColor={theme.colors.primary}
          // onPress={() => navigation.navigate("AddOrUpdate", { type: "create" })}
        />
      </S.ContainerButton>
    </S.Container>
  );
};

export default Home;
