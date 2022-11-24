/*
화면이동
화면을 StackNavigation => Stack.Screen 추가
화면 전환하기 전의 페이지에 파라미터에 {navigation} 추가
onPress 함수에 navigation.navigate('화면 name') 입력
화면 전환 후의 페이지에서 되돌아 오고 싶다면 navigation.pop() 함수 입력
*/

import { NavigationContainer } from "@react-navigation/native";
import NoticeScreen from "../screens/NoticeScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTabNavigation}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
