import React from 'react';
import Employees from "../employees/Employees";
import Search from "../employees/Search";
import Filters from "../employees/Filters";

const Home = () => {

    return (
        <div className="container pt-5 ">
            <div className="row justify-content-end mb-5">
                <div className="col-12 mb-1">
                    <Search/>
                </div>
                <div className="col-3 mb-1">
                <Filters/>
                </div>
            </div>
            <Employees/>
        </div>
    );
};

export default Home;