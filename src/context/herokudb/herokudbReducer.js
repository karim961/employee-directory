import {
    CREATE_EMPLOYEE,
    SET_LOADING,
    DELETE_EMPLOYEE,
    GET_EMPLOYEE,
    GET_EMPLOYEES,
    SEARCH_EMPLOYEES,
    GET_EMPLOYEES_PAGINATED,
    UPDATE_EMPLOYEE,

} from '../types'


export default (state, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false
            };
        case GET_EMPLOYEES_PAGINATED:

            let links = action.payload.headers.link.split(",");
            let firstPage = links[0].split('_page=')[1].split('&')[0];
            let LastPage = links[links.length - 1].split('_page=')[1].split('&')[0];

            return {
                ...state,
                employees: action.payload.data,
                indexOfLastPage: LastPage,
                indexOfFirstPage: firstPage,
                paginated: true,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SEARCH_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                paginated: false,
                loading: false
            };
        case GET_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                loading: false
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee !== action.payload),
                loading: false
            };
        case UPDATE_EMPLOYEE:

            let foundIndex = state.employees.findIndex(x => x.id === action.payload.id);
            state.employees[foundIndex] = action.payload;

            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}