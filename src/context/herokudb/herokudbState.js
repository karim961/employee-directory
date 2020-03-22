import React, {useReducer} from "react";
import Axios from "axios";
import HerokudbContext from "./herokudbContext";
import HerokudbReducer from './herokudbReducer';
import {
    GET_EMPLOYEES,
    SEARCH_EMPLOYEES,
    SET_LOADING,
    GET_EMPLOYEE,
    GET_EMPLOYEES_PAGINATED,
    DELETE_EMPLOYEE, UPDATE_EMPLOYEE, FILTER_EMPLOYEES,

} from "../types";

let herokudbURL;
console.log(process.env);
//TODO: Handle error from server  calls
if (process.env.NODE_ENV !== 'production') {
    herokudbURL = process.env.REACT_APP_HEROKU_JSON_SERVER_URL;
} else {
    console.log(process.env.HEROKU_JSON_SERVER_URL);
    herokudbURL = process.env.HEROKU_JSON_SERVER_URL;
}
;

const HerokudbState = props => {
    const initialState = {
        employees: [],
        employee: {},
        loading: false,
        employeesPerPage: 12,
        currentPage: 1,
        indexOfLastPage: 1,
        indexOfFirstPage: 1,
        paginated: false,
    };


    const [state, dispatch] = useReducer(HerokudbReducer, initialState);

    //Get all Employees
    const getEmployees = async () => {
        setLoading();
        const res = await Axios.get(`${herokudbURL}`);
        dispatch({
            type: GET_EMPLOYEES,
            payload: res.data
        })

    };

    //Get Employees with pagination with teh ability to set the current page and the number of employees per page
    const getEmployees_paginated = async (currentPage = state.currentPage, employeesPerPage = state.employeesPerPage) => {
        setLoading();
        const res = await Axios.get(`${herokudbURL}?_page=${currentPage}&_limit=${employeesPerPage}`);

        dispatch({
            type: GET_EMPLOYEES_PAGINATED,
            payload: res
        })

    };

    //Search Employees
    const searchEmployees = async (text) => {
        setLoading();
        const res = await Axios.get(`${herokudbURL}?q=${text}`);
        dispatch({
            type: SEARCH_EMPLOYEES,
            payload: res.data
        })
    };

    //TODO add filter by multiple properties
    //filter employees
    const filterEmployees = async (property, text) => {
        setLoading();
        const res = await Axios.get(`${herokudbURL}?${property}=${text}`);
        dispatch({
            type: FILTER_EMPLOYEES,
            payload: res.data
        })
    };

    //Get Employee
    const getEmployee = async (id) => {
        setLoading();
        const res = await Axios.get(`${herokudbURL}/${id}`);
        dispatch({
            type: GET_EMPLOYEE,
            payload: res.data
        });
    };

    //Create new employee
    const createEmployee = async (employee) => {
        setLoading();
        await Axios.post(`${herokudbURL}`, employee);
        getEmployees_paginated();

    };

    //update Employee
    const updateEmployee = async (employee) => {
        setLoading();
        const res = await Axios.put(`${herokudbURL}/${employee.id}`, employee);

        dispatch({
            type: UPDATE_EMPLOYEE,
            payload: res.data
        });
    };

    //Delete Employee
    const deleteEmployee = async (id) => {
        setLoading();
        const res = await Axios.delete(`${herokudbURL}/${id}`);

        dispatch({
            type: DELETE_EMPLOYEE,
            payload: id
        });
    };

    //Set the loading to false
    const setLoading = () => dispatch({type: SET_LOADING});


    return <HerokudbContext.Provider value={{
        employees: state.employees,
        employee: state.employee,
        loading: state.loading,
        currentPage: state.currentPage,
        indexOfFirstPage: state.indexOfFirstPage,
        indexOfLastPage: state.indexOfLastPage,
        paginated: state.paginated,
        getEmployees,
        getEmployees_paginated,
        searchEmployees,
        getEmployee,
        deleteEmployee,
        createEmployee,
        updateEmployee,
        filterEmployees

    }}>
        {props.children}
    </HerokudbContext.Provider>
};

export default HerokudbState;