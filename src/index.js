import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReductProvider } from "react-redux";

// This can be a good place to initial store with data
const store = configureStore();

render(
  <ReductProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReductProvider>,
  document.getElementById("app")
);
