import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const TotalScreen = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text>TOTAL SCREEN</Text>
      </View>
    );
  };

  const renderTotalList = () => {
    return (
      <>
        <View style={styles.totalListStyle}>
          <Text>YOUR TOTAL FOR THIS MONTH IS:</Text>
        </View>
        <View style={styles.totalTextStyle}>
          <Text>YOUR TOTAL FOR THIS MONTH IS:</Text>
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
