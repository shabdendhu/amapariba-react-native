import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Headers from "./components/shared/Headers";
import Banner from "./components/shared/Banner";
import Layout from "./components/osComponents/SafeAreaView";
import Home from "./components/Home";
import Category from "./components/Category";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const MainComponent = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
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
