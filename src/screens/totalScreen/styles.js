import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FF7F50",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "orange",
    height: 60,
    transform: [
      {
        translateY: 0,
      },
    ],
  },
  totalListStyle: {
    width: "100%",
    height: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  totalTextStyle: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
