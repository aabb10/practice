import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-paper";

const SearchCard = ({ name, onPress }) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "white" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      >
        <Divider />
        <View style={styles.container}>
          <View style={[{ flex: 1 }, styles.rightContainer]}>
            <Text
              style={[styles.name, { color: "black" }]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  divider: { marginTop: 20, marginBottom: 20 },
  rightContainer: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 17,
  },
  image: {
    borderRadius: 5,
    width: 90,
    height: 90,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default SearchCard;
