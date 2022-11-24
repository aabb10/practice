import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TopBarIcon = ({ onPress }) => {
  return (
    <Pressable style={styles.search} onPress={onPress}>
      <Ionicons name="search-outline" size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  search: { marginRight: 30 },
});

export default TopBarIcon;
