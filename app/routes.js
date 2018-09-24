import { createStackNavigator } from 'react-navigation';
import LoginScreen from "./login";
import HomeScreen from "./home";

export const RootStack = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen
  },
  {initialRouteName: 'Login',}
  );