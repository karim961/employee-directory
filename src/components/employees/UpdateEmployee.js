import React, {useContext} from 'react';
import EmployeeForm from "./EmployeeForm";
import HerokudbContext from "../../context/herokudb/herokudbContext";
import {Link} from "react-router-dom";

//class responsible for the update of the employee
const UpdateEmployee = ({history}) => {

    const {updateEmployee, employee} = useContext(HerokudbContext);

    const submitForm = async (employee) => {

        await updateEmployee(employee);
        history.push(`/employee/${employee.id}`)
    };

    return (
        <div className="row bg-white px-5 py-5 rounded mt-5">
            <Link to={`/employee/${employee.id}`} className="btn btn-outline-dark">
                <span className="btn-label"><i className="fas fa-arrow-left"/> </span> Back
            </Link>
            <EmployeeForm submitForm={submitForm} employee={employee}/>
        </div>
    );
};

export default UpdateEmployee;