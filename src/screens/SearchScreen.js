import { FlatList, Text, View } from "react-native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Searchbar } from "react-native-paper";
import SearchCard from "../components/SearchCard";

const SearchScreen = ({ navigation }) => {
  const [studyName, setStudyName] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const study = query(collection(db, "study"));
    getDocs(study)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setStudyName((prevState) => [...prevState, doc.data()]);
          console.log(doc.data());
        });
      })
      .catch((e) => {
        console.log(`Error : ${e}`);
      });
  }, []);

  useEffect(() => {
    setSearchResult(
      !searchQuery
        ? []
        : studyName.filter((v) =>
            v.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
    );
    console.log(searchResult);
  }, [searchQuery]);

  const renderItem = useCallback(({ item }) => {
    const pressSearchCard = () => {
      navigation.navigate("JoinStudy", {
        studyName: item.name,
        location: item.location,
        members: item.members,
        category: item.category,
      });
    };
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
      <FlatList
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};
export default SearchScreen;
