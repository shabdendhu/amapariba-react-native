import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Headers from "./components/shared/Headers";
import Banner from "./components/shared/Banner";
import Layout from "./components/osComponents/SafeAreaView";
import Category from "./components/Home/Category";

const MainComponent = () => {
  return (
    <Layout>
      <Headers />
      <Banner />
      <Category />
      {/* <Body/> */}
      {/* <Footer/> */}
    </Layout>
  );
};

export default MainComponent;

const styles = StyleSheet.create({});
