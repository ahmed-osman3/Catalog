import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Card from "./Card";

const CardView = () => {
  const [data, setData] = useState([{ title: "Card Title", reviews: 4 }]);
  console.log(data);
  return (
    <View style={{ alignItems: "center", padding: 30 }}>
      {/* <Card title="Card Title" reviews={4} /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card title={item.title} reviews={item.reviews} />
        )}
      />
    </View>
  );
};

export default CardView;
