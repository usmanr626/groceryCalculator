import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const TextButton = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContaier} onPress={onPress}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default TextButton;
