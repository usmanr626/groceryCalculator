import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //justifyContent: "center",
    // alignItems: "center",
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
        translateY: 0,
      },
    ],
  },
  groceryListContainer: {
    width: "100%",
    height: "60%",

    justifyContent: "center",
    alignItems: "center",
  },
  inputContainerStyle: {
    width: "100%",
    height: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButtonContainer: { marginTop: 10 },
});

export default styles;
