import React, { useEffect } from "react";
import { Text, Image, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";

import styles from "./styles";

const message = {
  id: "1",
  uri: "https://www.xclusiveloaded.com/wp-content/uploads/2021/08/Kezyklef_ft_Zoro_-_Umbrella.mp3",
  imageUri:
    "https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg",
  title: "cross",
  preacher: "Rev Dubus",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
  };

  const playCurrentMessage = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: message.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
  };

  useEffect(() => {
    // Play the message

    if (message) {
      playCurrentMessage();
    }
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: message.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{message.title}</Text>
          <Text style={styles.preacher}>{message.preacher}</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="hearto" size={30} color={"white"} />
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={30}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
