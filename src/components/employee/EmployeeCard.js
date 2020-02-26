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
        <button type="button" onClick={() => props.fireEmployee(props.employee.id)}>Fire</button>
      </div>
    );
  };

  export default EmployeeCard;

