import React, {useContext} from 'react';
import EmployeeForm from "./EmployeeForm";
import HerokudbContext from "../../context/herokudb/herokudbContext";
import {Link} from "react-router-dom";

const CreateEmployee = ({history}) => {

    const {createEmployee} = useContext(HerokudbContext);

    const submitForm = async (employee) => {
        await createEmployee(employee);
        history.push('/')
    };

    return (
        <div className="row bg-white px-5 py-5 rounded mt-5">
            <Link to='/' className="btn btn-outline-dark">
                <span className="btn-label"><i className="fas fa-arrow-left"/> </span> Back
            </Link>

            <EmployeeForm submitForm={submitForm}/>
        </div>
    );
};

export default CreateEmployee;