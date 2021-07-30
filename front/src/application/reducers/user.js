import {
    LOAD_COUNT, LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER, UPDATE_COUNT,
    UPDATE_COUNT_FAILURE,
    UPDATE_COUNT_SUCCESS
} from "../constants";


const initialState = {
    user: {
        authenticated: false
    },
    count: {
        plan: {plan: false}
    },
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state};
        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, error: null};
        case LOGIN_USER_FAILURE:
            return {...state, error: action.payload};
        case LOGOUT_USER:
            return {user: initialState.user, count: initialState.count, error: null};
        case LOAD_COUNT:
            return {...state, count: action.payload, error: null};
        case UPDATE_COUNT:
            return {...state};
        case UPDATE_COUNT_SUCCESS:
            return {...state, count: action.payload};
        case UPDATE_COUNT_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export default reducer;