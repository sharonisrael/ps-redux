import React from "react";
import { render } from "react-dom";

function Hi() {
  // put a break point
  //debugger;
  return <p>Hi.</p>;
}

render(<Hi />, document.getElementById("app"));
