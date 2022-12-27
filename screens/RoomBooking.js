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
          {/* <Ionicons name="ios-close" size={24} color="black" /> */}

          <TouchableOpacity>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <Text>Room Booking </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    alignItems: "stretch",
    alignContent: "space-between",
    justifyContent: "center",
    flex: 1,
  },
});
