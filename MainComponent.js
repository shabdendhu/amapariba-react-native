import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Headers from "./components/shared/Headers";
import Banner from "./components/shared/Banner";
import Layout from "./components/osComponents/SafeAreaView";
import Home from "./components/Home";
import Category from "./components/Category";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const MainComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={{
      
        headerRight: () => (
          <FontAwesome
            color="white"
            style={styles.basketIcon}
            name="shopping-basket"
          />
        ),
        headerStyle: {
          backgroundColor: "#2f8a74",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
    // <Layout>
    //   <Headers />
    //   <Home />
    // </Layout>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  basketIcon: {
    fontSize: 20,
    marginRight: 10,
  },
});
