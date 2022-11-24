import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSwiper from "../components/HomeSwiper";
import HomeStudy from "../components/HomeStudy";
import { db } from "../../firebaseConfig";
import { useCallback, useEffect, useState } from "react";
import { query, collection, getDocs } from "firebase/firestore";

function HomeScreen({ navigation }) {
  const [studyList, setStudyList] = useState([]);

  useEffect(() => {
    const study = query(collection(db, "study"));
    getDocs(study).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setStudyList((prevState) => [...prevState, doc.data()]);
      });
    });
  }, []);

  const pressFAB = () => {
    navigation.navigate("Login");
  };

  const pressStudyCard = () => {
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
        <FloatingActionButton onPress={pressFAB} />
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
