import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Kennel from "./components/Kennel";

/* 
When the application starts render the Kennel component
React puts everything in public/index.html div with id of Root
*/


ReactDOM.render(
  <Router>
    <Kennel />
  </Router>,
  document.getElementById("root")
);


