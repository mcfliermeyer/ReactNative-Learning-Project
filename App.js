import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FormField from "./FormField";

export default function App() {
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["#EB6101", "#EB2A01"]}
          style={styles.backgroundGradient}
        >
          <View style={styles.container}>
            <FormField label="Fart">
              <TextInput placeholder="Full Name" />
            </FormField>
            <FormField label="Message">
              <TextInput placeholder="Message Me" multiline numberOfLines={4} />
            </FormField>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  backgroundGradient: {
    flex: 1,
  },
});
