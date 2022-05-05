import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Labels = ({ labels }) => {
  return (
    <View style={styles.labelContaineer}>
      <Text style={styles.labelText}>{labels}</Text>
    </View>
  );
};

export default Labels;

const styles = StyleSheet.create({
  labelContaineer: {
    borderBottomColor: "black",
    borderTopColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 30,
    marginTop: 5,
  },
  labelText: {
    fontSize: 20,
    textAlign: "center",
  },
});
