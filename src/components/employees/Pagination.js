import React, {useContext} from 'react';
import HerokudbContext from "../../context/herokudb/herokudbContext";

const Pagination = () => {

    const {indexOfFirstPage, indexOfLastPage, getEmployees_paginated} = useContext(HerokudbContext);
    const pageNumbers = [];

    const paginate = (number) => {
        getEmployees_paginated(number);
    };

    for (let i = indexOfFirstPage; i <= indexOfLastPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item ">
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number)
                        }
                        } href="!#" className="page-link text-success">
                            {number}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    );
};

export default Pagination;