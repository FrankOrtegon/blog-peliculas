import {LOGIN_USER, UPDATE_COUNT} from "../constants";
import {loadCount, loginUserFailure, loginUserSuccess, updateCountFailure, updateCountSuccess} from "../actions/user";

const loginUserFlow = ({firebase,api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if(action.type === LOGIN_USER){
        try{
            const user = await firebase.user.getUser();
            dispatch(loginUserSuccess(user));
            try{
                const count = await api.count.getCount(user.userid)
                dispatch(loadCount(count))
            }catch(error){
                console.log(error)
                const count = await api.count.createCount(user.userid)
                dispatch(loadCount(count))
            }
        }catch (error){
            dispatch(loginUserFailure(error));
        }
    }
}

const updateCountFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)
    if(action.type === UPDATE_COUNT){
        try {
            const count = await api.count.updateCount(action.payload)
            dispatch(updateCountSuccess(count))
        }catch (error) {
            dispatch(updateCountFailure(error))
        }
    }

}

const middlewareUser = [
    loginUserFlow,
    updateCountFlow,
]

export default middlewareUser
