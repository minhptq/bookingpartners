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
        <View>
          {/* <Ionicons name="ios-close" size={24} color="black" /> */}

          <TouchableOpacity style={styles.loginbtn}>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginbtn}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <Text>Room Booking </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  closebtn: { paddingLeft: 3 },
  loginbtn: { alignSelf: "flex-end", paddingRight: 7 },
  text: { margin: 6 },
});
