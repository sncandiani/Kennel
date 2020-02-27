import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: ""});
  const [isLoading, setIsLoading] = useState(false);
    //this watches the field change and changes the state
  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.Name === "") {
      window.alert("Please input an employee name");
    } else {
      setIsLoading(true);
      // Create employee through post, go back to main employee page
      EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };
  //jsx to return
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm