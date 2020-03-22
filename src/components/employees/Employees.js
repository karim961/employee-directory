import React, {useContext, useEffect} from 'react';
import EmployeeItem from "./EmployeeItem";
import HerokudbContext from "../../context/herokudb/herokudbContext";
import Spinner from "../layout/Spinner";
import Pagination from "./Pagination";

const Employees = () => {

    const {employees, loading, getEmployees_paginated,paginated} = useContext(HerokudbContext);

    useEffect(() => {
        getEmployees_paginated();
        //eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div>
                <div className="row">
                    {employees.map(employee => (
                        <EmployeeItem key={employee.id} employee={employee}/>
                    ))}
                </div>
                {paginated && (
                    <div className="row justify-content-center">
                    <Pagination/>
                </div>
                )}


            </div>
        );
    }
};

export default Employees;