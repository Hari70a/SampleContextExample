import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default class TextField extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.props.value}
          placeholder={"Search"}
          onChangeText={searchTerm => this.props.onChangeText({ searchTerm })}
          underlineColorAndroid="transparent"
          style={styles.input}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 15
  },
  input: {
    paddingLeft: 10,
    height: 50
  }
});
