import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
const banners = [
  require("../../assets/amaparibaBanner.jpg"),
  require("../../assets/amaparibaBanner2.jpg"),
  require("../../assets/amaparibaBanner3.jpg"),
  require("../../assets/amaparibaBanner4.webp"),
];
const Banner = ({ src }) => {
  return (
    <View style={styles.bannerContainer}>
      <Image style={styles.banner} source={src} />
    </View>
  );
};
const Banners = () => {
  return (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {banners.map((e, i) => (
          <Banner key={i} src={e} />
        ))}
      </ScrollView>
    </View>
  );
};
export default Banners;

const styles = StyleSheet.create({
  bannerContainer: {
    borderColor: "#155f91",
    borderWidth: 1.5,
    margin: 5,
    width: 350,
    borderRadius: 15,
    overflow: "hidden",
    // flexDirection:'row'
  },
  banner: {
    height: 120,
    width: 350,
    borderRadius: 15,
  },
});
