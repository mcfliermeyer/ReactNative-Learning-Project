import React, { Children } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FormField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      {Children.map(props.children, (child) => {
        return React.cloneElement(child, { style: styles.input });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginTop: 18,
    marginBottom: 8,
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
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "400",
    //might just be for android. ios might deafult
    textAlignVertical: "top", 
  },
});

export default FormField;
