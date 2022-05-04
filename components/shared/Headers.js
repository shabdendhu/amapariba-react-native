import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Headers = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Feather style={styles.arrowBack} name="menu" />
        {/* <AntIcon style={styles.arrowBack} name="arrowleft" /> */}
      </TouchableOpacity>
      <Text style={styles.headerText}>Headers</Text>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2f8a74",
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
  },
  arrowBack: {
    color: "white",
    fontSize: 30,
    marginRight: 10,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
});
