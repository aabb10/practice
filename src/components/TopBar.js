/*
Appbar 설명 : https://callstack.github.io/react-native-paper/appbar.html
*/

import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TopBar = ({ onPress }) => {
  return (
    <>
      <StatusBar />
      <Appbar.Header style={styles.header} statusBarHeight={5}>
        <Appbar.Content title="딜리언즈" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={onPress} />
        <Appbar.Action icon="account-circle" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  bar: {
    color: "black",
  },
});

export default TopBar;
