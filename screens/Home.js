import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardView from "../components/CardView";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar />
      <CardView />
      <TouchableOpacity
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          bottom: 24,
          paddingRight: 30,
        }}
        onPress={() => {
          navigation.navigate("");
        }}
      >
        <AntDesign name="pluscircle" color="red" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
