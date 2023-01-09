import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextButton } from "../../components/textButton";

const TotalScreen = ({ navigation }) => {
  const [dairyTotal, setDairyTotal] = useState("");
  const [groceryTotal, setGroceryTotal] = useState("");
  const [subTotal, setsubTotal] = useState("");

  useEffect(() => {
    const getDairyTotal = async () => {
      try {
        const storedTotal = await AsyncStorage.getItem("totalDairy");
        setDairyTotal(Number(storedTotal));
      } catch (error) {
        console.error(error);
      }
    };

    getDairyTotal();
  }, []);

  React.useEffect(() => {
    const getGroceryTotal = async () => {
      try {
        const storedTotal = await AsyncStorage.getItem("total");
        setGroceryTotal(Number(storedTotal));
      } catch (error) {
        console.error(error);
      }
    };

    getGroceryTotal(); // Get the total from async storage
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text>TOTAL SCREEN</Text>
      </View>
    );
  };

  const resetData = async () => {
    try {
      await AsyncStorage.removeItem("totalDairy");
      await AsyncStorage.removeItem("productsDairy");
      await AsyncStorage.removeItem("products");
      await AsyncStorage.removeItem("total");
      setDairyTotal("");
      setGroceryTotal("");
      setsubTotal("");
      return true;
    } catch (exception) {
      return false;
    }
  };
  const renderTotalList = () => {
    return (
      <>
        <View style={styles.totalListStyle}>
          <Text>YOUR TOTAL FOR THIS MONTH IS:{groceryTotal + dairyTotal}</Text>
          <Text>Dairy:{dairyTotal}</Text>
          <Text>Grocery:{groceryTotal}</Text>
        </View>
        <View style={styles.totalTextStyle}>
          <TextButton
            buttonText="Reset"
            onPress={() =>
              Alert.alert("Reset Data?", "All Data will be Lost", [
                {
                  text: "Cancel",

                  style: "destructive",
                },
                { text: "OK", onPress: () => resetData() },
              ])
            }
          />
        </View>
      </>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      {renderTotalList()}
    </View>
  );
};
export default TotalScreen;
