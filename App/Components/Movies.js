/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextField from "./TextField";
import ListRow from "./ListRow";

export default class Movies extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headTxt}>List of DC Superheros</Text>
        <TextField
          value={this.props.searchTerm}
          onChangeText={this.props.onChangeSearchTerm}
        />
        {this.props.movies.map((cur, index) => {
          return <ListRow key={index.toString()} cur={cur} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  headTxt: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 10
  }
});
