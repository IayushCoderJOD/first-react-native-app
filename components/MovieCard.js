import { Text, View, Image, StyleSheet, Button } from "react-native";

export default function MovieCard({ navigation, item, isDetailPage }) {
  return (
    <View>
      <View
        style={{
          ...styles.mainCardStyles,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image }}
            resizeMode="contain"
            style={{
              borderRadius: 4,
              height: "100%",
              width: 150,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 12,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#000000",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >{`${item.rank}. ${item.title}`}</Text>
          <View
            style={{
              marginTop: 12,
            }}
          >
            <Button
              onPress={() => navigation.navigate("Details", { id: item.id })}
              title="Details"
              color={"purple"}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardStyles: {
    height: 250,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    elevation: 8,
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});
