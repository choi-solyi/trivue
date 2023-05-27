import React from "react";
import App from "./App";
import { render } from "react-dom";
import "./index.css";
// import "./tailwind.css";

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
