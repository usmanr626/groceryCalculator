import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import styles from "./styles";
import { TextButton } from "../../components/textButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

let dummyData = [
  {
    date: "sss",
    product: "sss",
    price: 222,
  },
];

const GroceryScreen = ({ navigation }) => {
  console.log("Screen Rendered");

  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const currentDate = `${date}/${month}/${year}`;
  console.warn(currentDate);
  const [product, setProduct] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [copyData, setCopyData] = React.useState(null);

  const getData = async () => {
    try {
      const arrayString = await AsyncStorage.getItem("arrayKey");
      dummyData = JSON.parse(arrayString);
      console.log("Data retrieved", dummyData);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    if (!dummyData) {
      return;
    } else {
      getData();
    }
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <Text>Grocery Calculator</Text>
      </View>
    );
  };

  const renderGroceryList = () => {
    return (
      <View style={styles.groceryListContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>DATE</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>PRODUCT</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>PRICE</Text>
        </View>
        <FlatList
          data={dummyData}
          style={{ width: "100%", marginTop: 10 }}
          // key={`item`}
          ListHeaderComponent={() => {
            //View to set in Header
            return (
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                  marginBottom: 10,
                  alignItems: "center",
                }}
              ></View>
            );
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingBottom: 5,
                }}
              >
                <Text>{item.date}</Text>
                <Text>{item.product}</Text>
                <Text>{item.price}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  const addToList = async () => {
    console.log("Data to be added is: ", currentDate, product, price);
    if (!product) {
      Alert.alert("Please Enter Product");
    } else if (!price) {
      Alert.alert("Please Enter Price");
    } else if (dummyData == null) {
      Alert.alert("DATA IS NULL");
    } else {
      dummyData.push({
        date: currentDate,
        product: product,
        price: price,
      });
      Alert.alert("Data Added Successfully");
    }
    try {
      const asyncData = JSON.stringify(dummyData);

      await AsyncStorage.setItem("arrayKey", asyncData);

      console.log("data stored is", asyncData);

      setCopyData(asyncData);
    } catch (error) {
      console.log("Errorrr", error);
    }
  };
  const renderInputContainer = () => {
    return (
      <View style={styles.inputContainerStyle}>
        <Text style={{ fontSize: 18 }}>Total Grocery Till Now: </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <TextInput
            style={{
              width: 180,
              height: 60,
              backgroundColor: "white",
              borderRadius: 80,
              paddingHorizontal: 10,
              marginVertical: 20,
            }}
            onChangeText={setProduct}
            value={product}
            placeholder="Product"
          />
          <TextInput
            style={{
              width: 180,
              height: 60,
              backgroundColor: "white",
              borderRadius: 80,
              paddingHorizontal: 10,
              marginVertical: 20,
            }}
            onChangeText={setPrice}
            value={price}
            placeholder="Price"
          />
        </View>

        <View style={styles.textButtonContainer}>
          <TextButton
            buttonText="Add to List"
            onPress={() => addToList()}
          ></TextButton>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header */}
      {renderHeader()}
      {/* Grocery FlatList */}
      {renderGroceryList()}
      {/* Input Container */}
      {renderInputContainer()}
    </SafeAreaView>
  );
};

export default GroceryScreen;
