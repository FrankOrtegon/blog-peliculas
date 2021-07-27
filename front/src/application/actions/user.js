import {
    LOAD_COUNT,
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    UPDATE_COUNT, UPDATE_COUNT_FAILURE,
    UPDATE_COUNT_SUCCESS
} from "../constants";


export const loginUser = () => ({
    type: LOGIN_USER,
});

export const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});

export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILURE,
    payload: error,
});

export const logOutUser = () => ({
   type: LOGOUT_USER,
});

export const loadCount = count => ({
   type: LOAD_COUNT,
   payload: count,
});

export const updateCount = count => ({
    type: UPDATE_COUNT,
    payload: count,
})

export const updateCountSuccess = count => ({
    type: UPDATE_COUNT_SUCCESS,
    payload: count,
})

export const updateCountFailure = error => ({
    type: UPDATE_COUNT_FAILURE,
    payload: error,
})
