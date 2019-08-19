import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import "./style/style.css";

class App extends React.Component {
  render() {
    return <Root />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
