import React from 'react';
import Tilt from "react-tilt";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// this is the emplo
const EmployeeItem = ({employee: {avatar_url, first_name, last_name, id, department, location, job_title}}) => {

// setting the tilting options
    const tiltOptions = {
        reverse: true,  // reverse the tilt direction
        max: 25,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,    // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    };

    //TODO : fix deprecated findDOMnode warning
    return (
        <div className="col-3 d-flex mb-4">
            <Tilt className="empItem text-center" options={tiltOptions}>
                <Link to={`/employee/${id}`} className="d-block Tilt-inner">
                    <img src={avatar_url} alt="" className="avatar" style={{width: "100%"}}/>
                    <div className="empItem_pins ">
                        <span className="badge badge-light">{department}</span>
                        <span className="badge badge-light">{location}</span>
                    </div>
                    <div className="bg-success text-white pb-1 pt-1 empItem_details">
                        <h5 className="m-0">{first_name + " " + last_name}</h5>
                        <span>{job_title}</span>
                    </div>
                </Link>

            </Tilt>
        </div>
    );
};

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired,
};

export default EmployeeItem;