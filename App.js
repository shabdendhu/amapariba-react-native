import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainComponent from "./MainComponent";
export default function App() {
  return <MainComponent />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
