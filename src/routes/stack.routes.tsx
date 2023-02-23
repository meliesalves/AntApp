import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

/* Screens */
import Home from "../screens/Home";
import theme from "../theme";

const Stack = createNativeStackNavigator();

const navConfig = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
    borderBottomWidth: 0,
    shadowOpacity: 0,
  },
  headerTintColor: theme.colors.secondary,
  headerTitleStyle: {
    fontFamily: "Poppins_600SemiBold",
  },
  headerLeftContainerStyle: {
    paddingLeft: 24,
  },
  headerRightContainerStyle: {
    paddingRight: 24,
  },
};
const MyStack: React.FC = () => {
  const renderRoutes = () => (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={navConfig} />
      </Stack.Navigator>
    </>
  );

  return renderRoutes();
};

export default MyStack;
