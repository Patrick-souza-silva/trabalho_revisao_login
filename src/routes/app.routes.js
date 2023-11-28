import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginOne from "../screens/LoginOne";
import LoginTwo from "../screens/LoginTwo";
import Home from "../screens/home";
import LoginFinal from "../screens/LoginFinal";

function AppRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="screenOne" component={LoginOne} />
    <Screen name="screenTwo" component={LoginTwo} />
    <Screen name="screenLogin" component={LoginFinal}/>
    </Navigator>
  );
}

export default AppRoutes;
