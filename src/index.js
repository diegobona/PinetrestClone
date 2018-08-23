import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import registerServiceWorker from "./registerServiceWorker";
import { baseTheme } from "./themes/themes";

ReactDOM.render(
  <MuiThemeProvider theme={baseTheme}>
    <CssBaseline /> {/* initialize css */}
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
