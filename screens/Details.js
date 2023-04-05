import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Tela de detalhes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "20%",
    color: "white",
  },
  container: {
    backgroundColor: "#121C39",
    flex: 1,
  },
});