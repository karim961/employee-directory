import React, {useContext, useState} from 'react';
import HerokudbContext from "../../context/herokudb/herokudbContext";

//TODO: add pagination to search results

const Search = () => {

    const {searchEmployees} = useContext(HerokudbContext);
    const [text, setText] = useState('');
    const [searched, setSearched] = useState(false);


    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alert("please enter something before submitting")
        } else {
            searchEmployees(text);
            setSearched(true);
            setText('');
        }
    };

    return (
        <div>
            <form className="input-group mb-5">
                <input type="text" name="text" placeholder="Search Users..." value={text}
                       onChange={onChange}
                       className="form-control"
                />
                <div className="input-group-append">
                    <input type={"submit"} value={"Search"} className="btn btn-success btn-block" onClick={onSubmit}/>
                </div>
                {searched && (<button className="btn btn-light btn-block" onClick={setSearched(false)}>Clear</button>)}
            </form>

        </div>
    );
};


export default Search;