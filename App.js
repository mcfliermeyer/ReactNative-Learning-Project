import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameLabel}>Name</Text>
        <TextInput style={styles.nameInput} />
      </View>
      <Text>making a contact form for practice!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    backgroundColor: "ghostwhite",
    width: "80%",
    height: "40%",
  },
  nameLabel: {
    backgroundColor: "aqua"
  },
});
