import React, {useContext, useState} from 'react';
import HerokudbContext from "../../context/herokudb/herokudbContext";

const Filters = () => {

    const {filterEmployees} = useContext(HerokudbContext);

    const [text, setText] = useState('');
    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert("please enter something before submitting")
        } else {
            filterEmployees('location', text);
        }
    };
    return (
        <div>
            <form className="input-group ">
                <select className="form-control" id="location" name="location"
                        onChange={onChange}>
                    <option selected disabled>Choose...</option>
                    <option value="United States">United States</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="United Kingdom">United Kingdom</option>
                </select>
                <div className="input-group-append">
                    <button type={"submit"} className="btn btn-secondary btn-block" onClick={onSubmit}><i className="fas fa-filter"/> </button>
                </div>
            </form>
        </div>
    );
};

export default Filters;