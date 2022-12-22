import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PhoneOrEmail() {
  return (
    <Modal>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <Ionicons name="ios-close" size={24} color="black" />
        <Text>Phone or email </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});
