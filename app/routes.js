import { createStackNavigator } from 'react-navigation';
import LoginScreen from "./login";
import HomeScreen from "./home";
import ProfileScreen from "./profile";

export const RootStack = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {initialRouteName: 'Login',}
  );