import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useDispatch } from "react-redux";

import AddOrUpdate from "screens/AddOrUpdate";
import Detail from "screens/Detail";
import Login from "screens/Login";
import Register from "screens/Register";
import { saveUser } from "store/ducks/user/actions";

/* Screens */
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
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
  const [initialRoute, setInitialRoute] = React.useState<string | null>(null);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const checkIfUserExist = async () => {
    AsyncStorage.getItem("@USER_DATA", (_err, result) => {
      if (result) {
        const user = JSON.parse(result);
        dispatch(saveUser(user));
        setIsLogged(true);
        setLoaded(true);
        return;
      }
      setLoaded(true);
    });
  };

  const checkRender = () => {
    if (isLogged) return "Home";

    return "Welcome";
  };

  React.useEffect(() => {
    const init = async () => {
      await checkIfUserExist();
    };
    init();
  }, []);

  const renderRoutes = () => (
    <>
      <Stack.Navigator initialRouteName={checkRender()}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} options={navConfig} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={navConfig}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddOrUpdate"
          component={AddOrUpdate}
          options={navConfig}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );

  const loader = () => <></>;

  return loaded ? renderRoutes() : loader();
};

export default MyStack;
