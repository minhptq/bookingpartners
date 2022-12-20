import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function CheckMem() {
  return (
    <View style={styles.container}>
      <Text>kkk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
