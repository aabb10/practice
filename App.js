import * as React from "react";
import BottomTabNavigation from "./components/BottomTabNavigation";
import HomeScreen from "./src/HomeScreen";
import ManagementScreen from "./src/ManagementScreen";
import ListScreen from "./src/ListScreen";
import CalendarScreen from "./src/CalendarScreen";
import FAB from "./components/FloatingActionButton";

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
