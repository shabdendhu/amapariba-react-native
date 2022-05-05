import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Labels from "../templates/Labels";
import VerticalProductCard from "../product/VerticalProductCard";
const SeasonsTop = () => {
  return (
    <View>
      <Labels labels={"SEASONS BEST ITEMS"} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.seasonsBestContaineer}
      >
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
        <VerticalProductCard />
      </ScrollView>
    </View>
  );
};

export default SeasonsTop;

const styles = StyleSheet.create({
  seasonsBestContaineer: {
    padding: 5,
    backgroundColor: "#cdcdcd",
  },
});
