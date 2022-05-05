import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const VerticalProductCard = () => {
  const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid
  ) => {
    if (Platform.OS === "ios") {
      styles.boxShadow = {
        shadowColor: shadowColorIos,
        shadowOffset: { width: xOffset, height: yOffset },
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === "android") {
      styles.boxShadow = {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

  generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 7, "#171717");
  return (
    <View style={styles.card}>
      <Text>ewf</Text>
    </View>
  );
};

export default VerticalProductCard;

const styles = StyleSheet.create({
  card: {
    height: 300,
    marginRight: 10,
    borderRadius: 10,
    width: 150,
    overflow: "hidden",
    backgroundColor: "white",
    borderColor: "#591a07",
    borderWidth: 1,
  },
});
