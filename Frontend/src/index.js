import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";



const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "db4f0bee",
  apiSecret: "8Ye8AvCAhYKBOrjD"
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
