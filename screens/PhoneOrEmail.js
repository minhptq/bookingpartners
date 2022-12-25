import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PhoneOrEmail() {
  return (
    <Modal>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <Ionicons name="ios-close" size={24} color="black" />
        <TouchableOpacity style={styles.loginbtn}>
          <Text>Login</Text>
        </TouchableOpacity>
        <Text>Phone or email </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  loginbtn: {
    right: "0%",
  },
});
