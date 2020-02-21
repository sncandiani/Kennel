import React from "react";
const EmployeeCard = () => {
    return (
      <div className="card">
        <div className="card-content">
        <img src={require("./winnie.png")} alt="Winnie the Pooh"/>
        <h1>
           Employees:
          </h1>
          <ul>
              <li>Lisa Sachs</li>
              <li>Matthew Reeds</li>
              <li>Cooper Cotton</li>
              <li>Margaret Robbins</li>
          </ul>
        </div>
      </div>
    );
  };

  export default EmployeeCard;