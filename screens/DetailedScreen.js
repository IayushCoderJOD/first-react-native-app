import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import MovieCard from "../components/MovieCard";
import { StatusBar } from "expo-status-bar";

export default function DetailedScreen({ route }) {
  const [loading, setLoading] = useState(false);
  const [detailsData, setDetailsData] = useState(null);
  console.log(route);
  const { params } = route;
  const { id } = params;

  useEffect(() => {
    setLoading(true);
    if (id) {
      async function getMovieDetailsById() {
        const response = await fetch(
          `https://imdb-top-100-movies.p.rapidapi.com/series/${id}`,
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
          setDetailsData(json);
        }
      }
      getMovieDetailsById();
    }
  }, [id]);
  // console.log(detailsData, loading);
  if (loading) {
    return (
      <ActivityIndicator size={"large"} color={"blue"} style={{ flex: 1 }} />
    );
  }
  return (
    <View style={styles.container}>
      <MovieCard isDetailsPage={true} item={detailsData} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
