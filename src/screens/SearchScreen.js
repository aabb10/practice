import { FlatList, Text, View, StyleSheet } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";
import { useCallback, useEffect, useState } from "react";
import StudyCard from "../components/StudyCard";
import SearchCard from "../components/SearchCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import DropDownPicker from "react-native-dropdown-picker";

const SearchScreen = ({ navigation }) => {
  const [searchList, setSearchList] = useState([]);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [openLocation, setOpenLocation] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [valueLocation, setValueLocation] = useState(null);
  const [valueCategory, setValueCategory] = useState(null);

  const [itemsLocation, setItemsLocation] = useState([
    { label: "서울", value: "서울" },
    { label: "인천", value: "인천" },
    { label: "부산", value: "부산" },
    { label: "대전", value: "대전" },
    { label: "광주", value: "광주" },
    { label: "대구", value: "대구" },
    { label: "울산", value: "울산" },
    { label: "경기도", value: "경기도" },
    { label: "강원도", value: "강원도" },
    { label: "충청북도", value: "충청북도" },
    { label: "충청남도", value: "충청남도" },
    { label: "전라북도", value: "전라북도" },
    { label: "전라남도", value: "전라남도" },
    { label: "경상북도", value: "경상북도" },
    { label: "경상남도", value: "경상남도" },
    { label: "제주", value: "제주" },
    { label: "세종", value: "세종" },
  ]);

  const [itemsCategory, setItemsCategory] = useState([
    { label: "IT/코딩", value: "IT/코딩" },
    { label: "토익", value: "토익" },
  ]);

  useEffect(() => {
    setSearchList([]);
    const studies = query(
      collection(db, "study"),
      where("location", "==", valueLocation),
      where("category", "==", valueCategory)
    );
    getDocs(studies).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setSearchList((prevState) => [...prevState, doc.data()]);
      });
    });
  }, [valueLocation, valueCategory]);

  const renderItem = useCallback(({ item }) => {
    const pressSearchCard = () => {};
    return <SearchCard name={item.name} onPress={pressSearchCard} />;
  }, []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.filter}>
        <View style={styles.location}>
          <DropDownPicker
            open={openLocation}
            value={valueLocation}
            items={itemsLocation}
            setOpen={setOpenLocation}
            setValue={setValueLocation}
            setItems={setItemsLocation}
            zIndex={2000}
            placeholder="지역"
          />
        </View>
        <View style={styles.category}>
          <DropDownPicker
            open={openCategory}
            value={valueCategory}
            items={itemsCategory}
            setOpen={setOpenCategory}
            setValue={setValueCategory}
            setItems={setItemsCategory}
            zIndex={1000}
            placeholder="카테고리"
          />
        </View>
      </View>
      <View>
        <FlatList
          data={searchList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
  },
  location: { flex: 1 },
  category: { flex: 1 },
});

export default SearchScreen;
