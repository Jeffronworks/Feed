import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  creator: {
    color: "lightgray",
    margin: 5,
    fontSize: 20,
  },
  streams: {
    margin: 5,
    color: "lightgray",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#8E2F2F",
    height: 50,
    width: 175,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "lightgray",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
