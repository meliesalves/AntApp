import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { ThemeProvider } from "styled-components/native";

import theme from "../theme";
import MyStack from "./stack.routes";

function Routes() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <></>;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.colors.gray_dark} />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default Routes;
