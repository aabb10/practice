import * as React from "react";
import BottomTabNavigation from "./src/components/BottomTabNavigation";
import HomeScreen from "./src/screens/HomeScreen";
import ManagementScreen from "./src/screens/ManagementScreen";
import ListScreen from "./src/screens/ListScreen";
import CalendarScreen from "./src/screens/CalendarScreen";

function App() {
  return (
    <>
      <BottomTabNavigation
        HomeScreen={HomeScreen}
        ManagementScreen={ManagementScreen}
        CalendarScreen={CalendarScreen}
        ListScreen={ListScreen}
      />
    </>
  );
}

export default App;
