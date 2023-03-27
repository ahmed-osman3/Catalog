import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const Navbar = () => {
  return (
    <View style={styles.navBarContainer}>
      <FontAwesome5 name="bars" size={24} color="white" />
      <Text style={{ color: "white", fontSize: 20, paddingTop: 5 }}>
        Cat-a-log
      </Text>
      <FontAwesome5 name="ellipsis-v" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: "center",
    backgroundColor: "#007cb0",
    height: 50,
  },
});

export default Navbar;
