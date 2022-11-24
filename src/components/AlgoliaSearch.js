import algoliasearch from "algoliasearch/lite";
import { SafeAreaView, StatusBar, View, StyleSheet, Text } from "react-native";
import { InstantSearch } from "react-instantsearch-hooks";
import { SearchBox } from "./SearchBox";
import { InfiniteHits } from "./InfiniteHits";

const searchClient = algoliasearch(
  "UFYRO35FDC",
  "03f6a1b8931acf19260a225a9d6a9819"
);

export default function AlgoliaSearch() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <InstantSearch indexName="instant_search" searchClient={searchClient}>
          <SearchBox />
          <InfiniteHits hitComponent={Hit} />
        </InstantSearch>
      </View>
    </SafeAreaView>
  );
}

function Hit({ hit }) {
  return <Text>{hit.name}</Text>;
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#252b33",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
});
