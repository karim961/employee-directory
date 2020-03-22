import React, {useContext, useEffect} from 'react';
import HerokudbContext from "../../context/herokudb/herokudbContext";
import Spinner from "../layout/Spinner";
import {Link} from "react-router-dom";

const Employee = ({match,history}) => {


    const {getEmployee, employee, loading,deleteEmployee} = useContext(HerokudbContext);

    useEffect(() => {
        getEmployee(match.params.id);
        //eslint-disable-next-line
    }, []);
    
    const {
        id,
        first_name,
        last_name,
        department,
        email,
        gender,
        avatar_url,
        job_title,
        location,
        website,
        bio,
        dob
    } = employee;
    
    const deleteEmp = async()=> {
        await  deleteEmployee(id);
        history.push('/')
    };
    
    if (loading) {
        return <Spinner/>
    } else {
        return (
            <div className=" mt-5 px-5 py-2 bg-white rounded">
                <div className="row justify-content-between">
                    <Link to='/' className="btn btn-outline-dark">
                        <span className="btn-label"><i className="fas fa-arrow-left"/> </span> Back
                    </Link>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <Link to={`/employee/${id}/update`} className="btn btn-info">
                            <span className="btn-label"><i className="fas fa-pencil-alt"/>  </span> Update
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={deleteEmp}>
                            <span className="btn-label"><i className="fas fa-times-circle"/> </span> Delete
                        </button>
                    </div>

                </div>

                <div className="row py-3">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={avatar_url} className="rounded-circle bg-light" alt="profile pic"/>
                    </div>
                    <div className="col-8">
                        <h2 className="text-success m-0 font-weight-bold"> {first_name} {last_name}</h2>
                        <h5 className="">{department} - {job_title}</h5>
                        <ul className="text-success">
                            <li>
                                <i className="fas fa-birthday-cake"/> : {dob}
                            </li>
                            <li>
                                <i className="fas fa-venus-mars"/> : {gender}
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt"/> : {location}
                            </li>
                            <li>
                                <i className="fas fa-at"/> : <a href={"mailto:" + email}> {email}</a>
                            </li>
                            <li>
                                <i className="fas fa-link"/> :<a href={website}> {website} </a>
                            </li>
                        </ul>
                        <div>
                            bio :
                            <br/> {bio}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default Employee;