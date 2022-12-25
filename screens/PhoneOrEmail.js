import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Table, Row, Rows } from "react-native-table-component";

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
    left: "0%",
  },
});
