import React, {useContext, useState} from 'react';
import HerokudbContext from "../../context/herokudb/herokudbContext";

//TODO: add pagination to search results
//
const Search = () => {

    const {searchEmployees} = useContext(HerokudbContext);
    const [text, setText] = useState('');


    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert("please enter something before submitting")
        } else {

            searchEmployees(text);

        }
    };

    return (
        <div>
            <form className="input-group ">
                <input type="text" name="text" placeholder="Search Users..." value={text}
                       onChange={onChange}
                       className="form-control"
                />
                <div className="input-group-append">
                    <input type={"submit"} value={"Search"} className="btn btn-success btn-block" onClick={onSubmit}/>

                </div>
            </form>

        </div>
    );
};


export default Search;