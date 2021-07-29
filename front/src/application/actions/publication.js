import { LOAD_PUBLICATIONS, LOAD_PUBLICATIONS_FAILURE, LOAD_PUBLICATIONS_SUCCESS } from "../constants";

export const loadPublications = ()=>({
    type:LOAD_PUBLICATIONS,
})

export const loadPublicationsSuccess = (publication)=>({
    type:LOAD_PUBLICATIONS_SUCCESS,
    payload:publication
})

export const loadPublicationsFailure = (error)=>({
    type:LOAD_PUBLICATIONS_FAILURE,
    payload:error
})
