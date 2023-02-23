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
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";

import { store } from "store";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.gray_dark} />
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default Routes;
