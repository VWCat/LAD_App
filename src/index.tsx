import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/normalize.css";
import "./assets/style/variables.css";
import "./assets/style/main.css";
import App from "./containers/App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
