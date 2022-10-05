// next thing to do is hook up message button and text components to state. check email is
// the correct syntax or whatever with regex and then clear the text when message is sent
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FormField from "./FormField";
import { useState } from "react";

export default function App() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = () => {
    console.log(
      `A message from ${nameInput} from email:${emailInput} that reads "${messageInput}"`
    );
  };

  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <SafeAreaView style={styles.safeContainer}>
        <LinearGradient
          colors={["#EB6101", "#EB2A01"]}
          style={styles.backgroundGradient}
        >
          <View style={styles.container}>
            <FormField label="Name">
              <TextInput
                placeholder="John Doe"
                onChangeText={(newText) => setNameInput(newText)}
                value={nameInput}
              />
            </FormField>
            <FormField label="Email">
              <TextInput
                placeholder="example@gmail.com"
                onChangeText={(newText) => setEmailInput(newText)}
                value={emailInput}
              />
            </FormField>
            <FormField label="Message">
              <TextInput
                placeholder="Message"
                multiline={true}
                numberOfLines={4}
                onChangeText={(newText) => setMessageInput(newText)}
                value={messageInput}
              />
            </FormField>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
