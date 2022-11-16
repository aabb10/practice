import * as React from "react";
import BottomTabNavigation from "./src/components/BottomTabNavigation";
import HomeScreen from "./src/screens/HomeScreen";
import ManagementScreen from "./src/screens/ManagementScreen";
import ListScreen from "./src/screens/ListScreen";
import CalendarScreen from "./src/screens/CalendarScreen";
import StackNavigation from "./src/components/StackNavigation";

function App() {
  return <StackNavigation />;
}

export default App;
