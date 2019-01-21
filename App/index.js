import React, { Component } from "react";
import Provider from "./Provider";
import Consumer from "./Consumer";
import Main from "../App/Components/Movies";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          <Main />
        </Consumer>
      </Provider>
    );
  }
}
