import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import IsPartner from "./navigations/IsPartner";

export default function App() {
  return (
    <NavigationContainer>
      <IsPartner />
      <StatusBar style="dark" backgroundColor="white" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
