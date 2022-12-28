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
        <View style={styles.header}>
          <Ionicons
            name="ios-close"
            size={24}
            color="black"
            style={{ backgroundColor: "white" }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              padding: 3,
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <Text>Room Booking </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    alignContent: "center",
  },
});
