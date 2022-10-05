// next thing to do is hook up message button and text components to state. check email is
// the correct syntax or whatever with regex and then clear the text when message is sent
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Button,
  TouchableOpacity,
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
            <FormField label="Name">
              <TextInput placeholder="John Doe" />
            </FormField>
            <FormField label="Email">
              <TextInput placeholder="example@gmail.com" />
            </FormField>
            <FormField label="Message">
              <TextInput
                placeholder="Message"
                multiline={true}
                numberOfLines={4}
              />
            </FormField>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>
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
  button: {
    minWidth: "50%",
    padding: 20,
    marginTop: 18,
    backgroundColor: "#5357ff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "800",
    color: "white",
  },
});
