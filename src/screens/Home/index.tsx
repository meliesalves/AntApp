import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import Button from "@src/components/Button";
import theme from "theme";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

import Card from "components/Card";
import { getAnts } from "services/api";
import { IAnts } from "@src/@types/ants";
import { ActivityIndicator } from "react-native";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>();
  const [ants, setAnts] = useState<IAnts[]>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Formigas",
    });
  }, [navigation]);

  const getAntsInfo = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getAnts();
      setAnts(data.ants);
    } catch (error) {
      throw new Error("Não conseguimos carregar seus dados", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAntsInfo();
  }, []);

  if (loading) {
    return (
      <S.ContainerLoading>
        <ActivityIndicator color={theme.colors.gray_light} size="large" />
      </S.ContainerLoading>
    );
  }
  return (
    <S.Container>
      <S.List
        data={ants}
        renderItem={({ item }: { item: IAnts }) => (
          <Card
            color={item.color}
            name={item.name}
            weight={item.weight}
            length={item.length}
          />
        )}
      />

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
