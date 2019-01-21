import React, { Component } from "react";
import { ThemeContext } from "./Provider";

export default class Consumer extends Component {
  render() {
    const { children } = this.props;
    console.log(ThemeContext, "Consume context");
    return (
      <ThemeContext.Consumer>
        {({ movies, searchTerm, onChangeSearchTerm, fetchSearchedItem }) => {
          return React.Children.map(children, child =>
            React.cloneElement(child, {
              movies,
              searchTerm,
              onChangeSearchTerm,
              fetchSearchedItem
            })
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
