import { addCommentSuccess, loadCommentFailure, loadCommentSuccess } from "../actions/comment";
import { ADD_COMMENT, LOAD_COMMENT } from "../constants";

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

const middlewareComment =[
    loadCommentFlow,
    addCommentFlow,
]

export default middlewareComment