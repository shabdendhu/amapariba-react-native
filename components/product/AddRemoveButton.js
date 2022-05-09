import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const AddRemoveButton = () => {
  const [items, setItems] = useState(0);
  return (
    <View style={styles.AddRemoveButton}>
      {items > 0 ? (
        <>
          <TouchableOpacity
            onPress={() => {
              setItems(items - 1);
            }}
          >
            <AntDesign style={styles.btnTxt} name="minus" />
          </TouchableOpacity>
          <Text style={styles.btnTxt}>{items}</Text>
          <TouchableOpacity
            onPress={() => {
              setItems(items + 1);
            }}
          >
            <AntDesign style={styles.btnTxt} name="plus" />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setItems(items + 1);
          }}
        >
          <Text style={styles.btnTxt}>ADD</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddRemoveButton;

const styles = StyleSheet.create({
  AddRemoveButton: {
    flexDirection: "row",
    backgroundColor: "#9e2121",
    width: 117,
    borderRadius: 5,
    height: 35,
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnTxt: {
    color: "white",
    fontSize: 17,
  },
});
