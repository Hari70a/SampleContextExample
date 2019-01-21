import React, { Component } from "react";
import { movies } from "./Constants";

const DEFAULT_STATE = {
  movies: movies,
  searchTerm: ""
};

export const ThemeContext = React.createContext(DEFAULT_STATE);

export default class Provider extends Component {
  state = DEFAULT_STATE;

  fetchSearchedItem = searchTerm =>
    movies.filter(cur => cur.name.startsWith(searchTerm));

  onChangeSearchTerm = async value => {
    this.setState(value);
    await this.setState({
      movies: value.searchTerm
        ? this.fetchSearchedItem(value.searchTerm)
        : movies
    });
  };

  render() {
    console.log("Inn Provider");
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          onChangeSearchTerm: this.onChangeSearchTerm,
          fetchSearchedItem: this.fetchSearchedItem
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
