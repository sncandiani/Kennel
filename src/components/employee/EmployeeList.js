import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'
//employeeList is a ____? an object?
const EmployeeList = () => {
    const [employees, setEmployees] = useState([]); //locations is an empty array, and set locations is a function
    //useState ?? refer back to notes 

    const getEmployees = () => {
        //get all is a method on a function employeemanager
        //employeesfromapi is a parameter name , arbitrary
        return EmployeeManager.getAll().then(employeesFromAPI => {
            console.log(employeesFromAPI)
            setEmployees(employeesFromAPI)
        })
    }
    const fireEmployeeFunction = (id) => {
        EmployeeManager.delete(id).then(() => EmployeeManager.getAll().then(setEmployees));
    }
        useEffect(() => {
            getEmployees();
        }, []);
        //returning the value of mapped employees within container cards
        return (
            <div className="container-cards">
                {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} fireEmployee={fireEmployeeFunction}/>)}
            </div>
        );
};
export default EmployeeList

