import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FF7F50",
  },
  headerStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "orange",
    height: 60,
    transform: [
      {
        translateY: -150,
      },
    ],
  },
  textButtonStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default styles;
