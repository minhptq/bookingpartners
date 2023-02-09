import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

const data = [
  { key: "02" },
  { key: "101" },
  { key: "102" },
  { key: "103" },
  { key: "104" },
  { key: "105" },
  { key: "201" },
  { key: "202" },
  { key: "203" },
  { key: "204" },
  { key: "205" },
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
        <Text style={styles.itemText}>{item.key}</Text>
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
    fontSize: 22,
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
  },
});
