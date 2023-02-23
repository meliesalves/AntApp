import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import Feather from "@expo/vector-icons/Feather";

import Button from "@src/components/Button";
import theme from "theme";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

import Card from "components/Card";
import { getAnts } from "services/api";
import { IAnts } from "@src/@types/ants";
import { ActivityIndicator } from "react-native";
import { NavButton } from "components/Button/styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>();
  const [ants, setAnts] = useState<IAnts[]>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Formigas",
      headerRight: () => (
        <NavButton onPress={() => getAntsInfo()}>
          <Feather
            name="refresh-ccw"
            size={24}
            color={theme.colors.secondary}
          />
        </NavButton>
      ),
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

  function generateAntWinLikelihoodCalculator() {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return (callback) => {
      callback("calculando");
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  }

  const calculateProbability = async () => {
    let antsUpdated = [];

    await ants.map(async (item, index) => {
      await generateAntWinLikelihoodCalculator()((callback) => {
        setLoading(true);
        ants[index].probability = callback;
        setLoading(false);
      });
      antsUpdated.push(item);
    });

    setAnts(
      antsUpdated.sort((a, b) => {
        return a.probability - b.probability;
      })
    );
  };

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
            probability={`${
              item.probability
                ? typeof item.probability === "string"
                  ? "calculando"
                  : Math.floor(item?.probability * 100) + "%"
                : "à calcular"
            }`}
          />
        )}
      />

      <S.ContainerButton>
        <Button
          title="Iniciar corrida"
          color={theme.colors.secondary}
          titleColor={theme.colors.primary}
          onPress={calculateProbability}
        />
      </S.ContainerButton>
    </S.Container>
  );
};

export default Home;
