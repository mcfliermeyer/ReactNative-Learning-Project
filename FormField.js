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

function renderChildren(childComponents) {
  return childComponents.map((child) => {
    return React.cloneElement(child, { style: styles.input });
  });
}

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
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});

export default FormField;
