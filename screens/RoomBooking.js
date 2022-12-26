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

export default function RoomBooking() {
  return (
    <Modal>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
          textStyle={},
            data={[
              <Ionicons
                name="ios-close"
                size={24}
                color="black"
                style={styles.closebtn}
              />,
              <TouchableOpacity style={styles.loginbtn}>
                <Text>Login</Text>
              </TouchableOpacity>,
            ]}
          />
        </Table>

        <Text>Room Booking </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  closebtn: { paddingLeft: 3 },
  loginbtn: { alignSelf: "flex-end", paddingRight: 7 },
});
