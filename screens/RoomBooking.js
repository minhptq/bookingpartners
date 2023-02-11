// import React from "react";
// import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

// const data = [
//   { key: "02", hourbooking: false },
//   { key: "101", hourbooking: false },
//   { key: "102", hourbooking: false },
//   { key: "103", hourbooking: false },
//   { key: "104", hourbooking: false },
//   { key: "105", hourbooking: false },
//   { key: "201", hourbooking: true },
//   { key: "202", hourbooking: false },
//   { key: "203", hourbooking: false },
//   { key: "204", hourbooking: false },
//   { key: "205", hourbooking: false },
// ];

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);

//   let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
//   while (
//     numberOfElementsLastRow !== numColumns &&
//     numberOfElementsLastRow !== 0
//   ) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };

// const numColumns = 2;
// export default class RoomBookings extends React.Component {
//   renderItem = ({ item, index }) => {
//     if (item.empty === true) {
//       return <View style={[styles.item, styles.itemInvisible]} />;
//     }
//     return (
//       <View style={styles.item}>
//         <View>
//           <Text style={styles.itemText}>{"2:15"}</Text>
//         </View>
//         <Text style={styles.itemText}>{item.key}</Text>
//         <Text style={styles.itemText}>{"20.000"}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <FlatList
//         data={formatData(data, numColumns)}
//         style={styles.container}
//         renderItem={this.renderItem}
//         numColumns={numColumns}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginVertical: 0,
//     marginLeft: 1,
//     marginRight: 1,
//   },
//   item: {
//     backgroundColor: "darkblue",
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     margin: 2,
//     borderRadius: 10,
//     height: Dimensions.get("window").width / numColumns, // approximate a square
//   },
//   itemInvisible: {
//     backgroundColor: "transparent",
//   },
//   itemText: {
//     color: "#fff",
//     fontSize: 22,
//   },
// });
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const RoomBookings = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    marginBottom: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#DDD",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default RoomBookings;
