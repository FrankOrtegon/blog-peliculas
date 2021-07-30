import { combineReducers } from 'redux';
import user from './user';
import publication from './publication';
import comment from './comment';

export default combineReducers({
    user:user,
    publication:publication,
    comment:comment,
})