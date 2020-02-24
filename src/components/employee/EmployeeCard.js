import React from "react";
const EmployeeCard = (props) => {
    return (
      <div className="card">
        <div className="card-content">
          <h1>
           Employees:
          </h1>
          <ul>
        <li>{props.employee.name}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default EmployeeCard;