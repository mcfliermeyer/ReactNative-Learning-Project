import { StyleSheet, Text, TextInput, View } from "react-native";

const FormField = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "800",
    color: "#ffffff",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  input: {
    minWidth: "80%",
    height: 50,
    padding: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});

export default FormField;
