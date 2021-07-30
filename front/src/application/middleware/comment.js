import { addCommentSuccess, loadCommentFailure, loadCommentSuccess, updateCommentFailure, updateCommentSuccess } from "../actions/comment";
import { ADD_COMMENT, LOAD_COMMENT, UPDATE_COMMENT } from "../constants";

const loadCommentFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === LOAD_COMMENT){
        try{
            const comment = await api.comment.loadComment()
            console.log(comment)
            dispatch(loadCommentSuccess(comment))
        }catch(error){
            console.log(error)
            dispatch(loadCommentFailure(error))  
        }
    }
}

const addCommentFlow = ({api}) => ({dispatch}) => next => async(action) =>{
    next(action);
    if(action.type === ADD_COMMENT){
        try{
            const comment = await api.comment.addComment()
            dispatch(addCommentSuccess(comment))
        }catch(error){
            dispatch(loadCommentFailure(error))
        }
    }
}

const updateCommentFlow = ({api}) => ({dispatch}) => next => async(action) => {
    next(action)
    if(action.type === UPDATE_COMMENT){
        try{
            const comment = await api.comment.updateComment(action.payload)
            dispatch(updateCommentSuccess(comment))
        }catch(error) {
            dispatch(updateCommentFailure(error))
        }
    }
}

const middlewareComment =[
    loadCommentFlow,
    addCommentFlow,
    updateCommentFlow,
]

export default middlewareComment