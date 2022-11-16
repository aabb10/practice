import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton";
import TopBar from "../components/TopBar";
import HomeSwiper from "../components/HomeSwiper";
import HomeStudy from "../components/HomeStudy";
import { db } from "../../firebaseConfig";
import { useCallback, useEffect, useState } from "react";

function HomeScreen({ navigation }) {
  const [studyList, setStudyList] = useState([]);
  useEffect(() => {
    const study = db.collection("study");
    study.get().then((index) => {
      index.forEach((doc) => {
        setStudyList((prevState) => [...prevState, doc.data()]);
      });
    });
  }, []);

  const pressStudyCard = () => {
    navigation.navigate("Notice");
  };

  const pressSearch = () => {
    navigation.navigate("Search");
  };

  const renderItem = useCallback(
    ({ item }) => (
      <HomeStudy
        name={item.name}
        location={item.location}
        person={item.person}
        onPress={pressStudyCard}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.key, []);

  return (
    <>
      <TopBar onPress={pressSearch} />
      <View style={styles.container}>
        <View style={styles.swiper}>
          <HomeSwiper />
        </View>
        <View style={styles.list}>
          <FlatList
            data={studyList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
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
