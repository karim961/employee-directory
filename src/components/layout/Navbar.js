import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar = ({icon, title}) => {

    return (
        <nav className="navbar bg-white text-success navbar-expand-lg ">
            <h1 className="font-weight-bold mr-auto">
                <i className={icon}/>
                {" " + title}
            </h1>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="navbar-nav">
                    <Link to={'/employees/create'} className="nav-link btn btn-success">
                        <i className="fas fa-plus-circle"/> Create</Link>
                </li>
            </ul>

        </nav>
    );
};

Navbar.defaultProps = {
    title: 'E-Directory',
    icon: 'far fa-address-book'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default Navbar;