import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NameField() {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.nameLabel}>Name</Text>
      <TextInput style={styles.nameInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  nameLabel: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: "aqua",
    justifyContent: "center",
    textAlign: "center",
  },
  nameInput: {
    minWidth: "80%",
    height: 60,
    backgroundColor: "#a1e192",
  },
});
