import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";
import MovieCard from "../components/MovieCard";

export default function HomeScreen({ navigation }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getListOfMovie() {
      const response = await fetch(
        "https://imdb-top-100-movies.p.rapidapi.com/",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "72d673d368msh185d0fe32c52f6cp1a04a8jsn3c3ca1e7100b",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        }
      );
      const json = await response.json();
      if (json) {
        setLoading(false);
        setMovieList(json);
      }
    }
    getListOfMovie();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  if (loading) {
    return (
      <ActivityIndicator color={"red"} style={{ flex: 1 }} size={"large"} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieList || []}
        renderItem={({ item }) => (
          <MovieCard navigation={navigation} item={item} />
        )}
      ></FlatList>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexx: 1,
    marginTop: 30,
  },
});
