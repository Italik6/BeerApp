import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./styles/loader.css";
import "./styles/main.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
