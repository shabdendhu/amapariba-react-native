import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Category from "./Category";
import SeasonsTop from "./SeasonsTop";
import Banners from "../shared/Banner";

const Home = ({ navigation }) => {
  return (
    <ScrollView contentInset={{ bottom: 100 }}>
      <Banners />
      <Category />
      <SeasonsTop />
      <Banners />
    </ScrollView>
  );
};

export default Home;
