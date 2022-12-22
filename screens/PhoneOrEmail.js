import { StyleSheet, Text, View, Modal } from "react-native";

export default function PhoneOrEmail() {
  return (
    <View style={styles.container}>
      <Modal>
        <Text>Phone or email </Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
