import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";

const Card = ({ title, reviews }) => {
  const arr = Array.from(Array(reviews).keys()).map((x) => x + 1);
  return (
    <View style={styles.cardView}>
      <Image source={require("../assets/192.jpeg")} />
      {/* <Image source={{ uri: "https://placekitten.com/344/192" }} /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Text style={{ paddingTop: 10, fontSize: 16 }}>{title}</Text>
        <View style={styles.ratingsContainer}>
          {arr.map((item) => (
            <AntDesign name="star" color="gold" size={18} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderBottomColor: "#bdbdbd",
    borderBottomWidth: 1,
  },
  ratingsContainer: {
    flexDirection: "row",
  },
});
export default Card;
