import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton";
import TopBar from "../components/TopBar";
import HomeSwiper from "../components/HomeSwiper";
import HomeStudy from "../components/HomeStudy";

function HomeScreen() {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <View style={styles.swiper}>
          <HomeSwiper />
        </View>
        <ScrollView style={styles.list}>
          <HomeStudy />
        </ScrollView>
        <FloatingActionButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: { flex: 0.8 },
  list: { flex: 1 },
});

export default HomeScreen;
