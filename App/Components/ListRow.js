import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class ListRow extends Component {
  render() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.welcome}>{this.props.cur.name}</Text>
        <Text style={styles.instructions}>{this.props.cur["alter_ego"]}</Text>
        <Text style={styles.instructions}>
          {this.props.cur["first_appearance"]}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    paddingVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  welcome: {
    fontSize: 20
  },
  instructions: {
    color: "#333333",
    marginBottom: 5
  }
});
