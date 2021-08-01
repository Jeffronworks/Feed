import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
import { Message } from "../../types";

export type MessageListItemProps = {
  message: Message;
};

const MessageListItem = (props: MessageListItemProps) => {
  const { message } = props;
  return (
    <View style={styles.container}>
      <Image source={{ uri: message.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.preacher}>{message.preacher}</Text>
      </View>
    </View>
  );
};

export default MessageListItem;
