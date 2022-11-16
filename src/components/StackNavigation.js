import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import NoticeScreen from "../screens/NoticeScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
        <Stack.Screen name="Notice" component={NoticeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
