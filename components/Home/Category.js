import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Labels from "../templates/labels";
const CategoryLabel = () => {
  return (
    <View>
      <Image source={require("../../assets/icon.png")} />
      <Text>text</Text>
    </View>
  );
};
const Category = () => {
  return (
    <View>
      <Labels labels={'SHOP BY ITEM CATEGORY'}/>
      <View>
        <CategoryLabel />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({

});
