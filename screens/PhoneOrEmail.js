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
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={[
              <Ionicons name="ios-close" size={24} color="black" />,
              <TouchableOpacity style={styles.loginbtn}>
                <Text>Login</Text>
              </TouchableOpacity>,
            ]}
            textStyle={styles.text}
          />
        </Table>

        <Text>Phone or email </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  loginbtn: { left: "50%" },
  text: { margin: 6 },
});
