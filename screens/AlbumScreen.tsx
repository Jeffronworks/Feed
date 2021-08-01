import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import MessageListItem from "../components/MessageListItem";

const AlbumScreen = (props) => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <FlatList
        data={albumDetails.message}
        renderItem={({ item }) => <MessageListItem message={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AlbumScreen;
