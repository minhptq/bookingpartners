import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const data = [
  { key: "02", hourbooking: false },
  { key: "101", hourbooking: false },
  { key: "102", hourbooking: false },
  { key: "103", hourbooking: false },
  { key: "104", hourbooking: false },
  { key: "105", hourbooking: false },
  { key: "201", hourbooking: true },
  { key: "202", hourbooking: false },
  { key: "203", hourbooking: false },
  { key: "204", hourbooking: false },
  { key: "205", hourbooking: false },
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 2;
export default class RoomBookings extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.itemText}>{"2:15"}</Text>
        </View>
        <Text style={styles.itemText}>{item.key}</Text>
        <Text style={styles.itemText}>{"20.000"}</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
    marginLeft: 1,
    marginRight: 1,
  },
  item: {
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 2,
    borderRadius: 10,
    height: Dimensions.get("window").width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: "transparent",
  },
  itemText: {
    color: "#fff",
    fontSize: 22,
  },
});
