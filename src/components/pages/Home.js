import React from 'react';
import Employees from "../employees/Employees";
import Search from "../employees/Search";

const Home = () => {

    return (
        <div className="container pt-5">

            <Search/>
            <Employees/>
        </div>
    );
};

export default Home;