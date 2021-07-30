import { addCommentSuccess, deleteCommemtSuccess, deleteCommentFailure, loadCommentFailure, loadCommentSuccess, updateCommentFailure, updateCommentSuccess } from "../actions/comment";
import { ADD_COMMENT, DELETE_COMMENT, LOAD_COMMENT, UPDATE_COMMENT } from "../constants";

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

const deleteCommentFlow = ({api}) => ({dispatch}) => next => async(action) => {
    next(action)
    if(action.type === DELETE_COMMENT){
        try{
            const idComment = await api.comment.deleteComment(action.payload)
            dispatch(deleteCommemtSuccess(idComment))
        }catch(error){
            dispatch(deleteCommentFailure(error))
        }
    }
}

const middlewareComment =[
    loadCommentFlow,
    addCommentFlow,
    updateCommentFlow,
    deleteCommentFlow,
]

export default middlewareComment