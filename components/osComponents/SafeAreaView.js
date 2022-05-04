import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return Platform.OS === "web" ? (
    <div>{children}</div>
  ) : (
    <SafeAreaView>{children}</SafeAreaView>
  );
};

export default Layout;
