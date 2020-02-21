/* 
This is simply another way of building a JavaScript object (Kennel) that has a single property -- 
a method called render -- that returns an HTML representation of some (hard-coded) data.

*/
import React from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

import "./Kennel.css";

const Kennel = () => {
  return (
    <>
      <NavBar />
      <ApplicationViews />
    </>
  );
};

export default Kennel;