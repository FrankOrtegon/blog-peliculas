import { ADD_COMMENT, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS, LOAD_COMMENT, LOAD_COMMENT_FAILURE, LOAD_COMMENT_SUCCESS, LOAD_PUBLICATIONS_FAILURE } from "../constants";

export const loadComment = () =>({
    type:LOAD_COMMENT,
})

export const loadCommentSuccess = (comment)=>({
    type:LOAD_COMMENT_SUCCESS,
    payload:comment
})

export const loadCommentFailure = (error) => ({
    type:LOAD_COMMENT_FAILURE,
    payload:error
})

export const addComment = () => ({
    type:ADD_COMMENT,
})

export const addCommentSuccess = (comment) => ({
    type:ADD_COMMENT_SUCCESS,
    payload:comment
})

export const addCommentFailure = (error) => ({
    type:ADD_COMMENT_FAILURE,
    payload:error
})