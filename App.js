import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import NameField from "./NameField";

export default function App() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <NameField />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "honeydew",
    alignItems: "center",
  },
  nameContainer: {
    margin: 20,
    backgroundColor: "ghostwhite",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
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
