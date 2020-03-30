import React from "react";
import  ReactDOM from "react-dom";

import App from "./App";
import "./styles/index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept();
}
