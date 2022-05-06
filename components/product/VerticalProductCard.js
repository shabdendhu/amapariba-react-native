import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal
} from "react-native";
import React from "react";
import AmountPicker from "./AmountPicker";

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
      <View style={styles.productDiscountContaineer}>
        <Text style={styles.productDiscountText}>12% off</Text>
      </View>
      <TouchableOpacity style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={require("../../assets/apple.png")}
        />
      </TouchableOpacity>
      <View style={styles.productPriceContainer}>
        <Text style={styles.priceText}>₹45 ₹30</Text>
      </View>
     <AmountPicker/>
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
    alignItems: "center",
    overflow: "hidden",
  },
  productImage: {
    height: 120,
    width: 120,
  },
  productImageContainer: {
    borderColor: "#80808052",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    width: 120,
    marginTop: 20,
    overflow: "hidden",
  },
  productPriceContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    marginLeft: 15,
  },
  productDiscountContaineer: {
    position: "absolute",
    zIndex: 99,
    top: 21,
    backgroundColor: "green",
    width: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
  },
  productDiscountText: { color: "white", textAlign: "center" },
});
