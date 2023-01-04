import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Table, Row, Rows } from "react-native-table-component";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function RoomBooking() {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <Modal>
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <View style={styles.header}>
          <View style={styles.closebtn}>
            <Ionicons name="ios-close" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.loginbtntittle}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
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
  },
  closebtn: { justifyContent: "center" },
  loginbtn: {
    justifyContent: "center",
    paddingLeft: 4,
    paddingRight: 4,
  },
  loginbtntittle: {
    fontSize: 17,
    fontWeight: "500",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
    width: "50%",
    borderWidth: 1,
  },
});
