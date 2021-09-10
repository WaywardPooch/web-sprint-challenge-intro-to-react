// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { worker } from "./mocks/browser";

// Import theming support
import theme from "./theme";
import { ThemeProvider } from "styled-components";

worker.start();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
