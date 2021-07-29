import { combineReducers } from 'redux';
import user from './user';
import publication from './publication';

export default combineReducers({
    user:user,
    publication:publication,
})