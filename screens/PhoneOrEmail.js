import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";

export default function PhoneOrEmail() {
  return (
    <Modal>
      <View style={styles.container}>
        <Text>Phone or email </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});
