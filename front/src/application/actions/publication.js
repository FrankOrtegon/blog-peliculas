import { LOAD_PUBLICATIONS, 
         LOAD_PUBLICATIONS_FAILURE, 
         LOAD_PUBLICATIONS_SUCCESS,
         ADD_PUBLICATIONS,
         ADD_PUBLICATIONS_SUCCESS,
         ADD_PUBLICATIONS_FAILURE,
         UPDATE_PUBLICATIONS,
         UPDATE_PUBLICATIONS_SUCCESS,
         UPDATE_PUBLICATIONS_FAILURE,
         DELETE_PUBLICATIONS,
         DELETE_PUBLICATIONS_SUCCESS,
         DELETE_PUBLICATIONS_FAILURE
        } from "../constants";

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

export const addPublications = (publication)=>({
    type:ADD_PUBLICATIONS,
    payload:publication
})

export const addPublicationsSuccess = (publication)=>({
    type:ADD_PUBLICATIONS_SUCCESS,
    payload:publication
})

export const addPublicationsFailure = (error)=>({
    type:ADD_PUBLICATIONS_FAILURE,
    payload:error
})

export const updatePublications = (publication)=>({
    type:UPDATE_PUBLICATIONS,
    payload:publication
})

export const updatePublicationsSuccess = (publication)=>({
    type:UPDATE_PUBLICATIONS_SUCCESS,
    payload:publication
})

export const updatePublicationsFailure = (error)=>({
    type:UPDATE_PUBLICATIONS_FAILURE,
    payload:error
})

export const deletePublications = ()=>({
    type:DELETE_PUBLICATIONS,
})

export const deletePublicationsSuccess = (id)=>({
    type:DELETE_PUBLICATIONS_SUCCESS,
    payload:id
})

export const deletePublicationsFailure = (error)=>({
    type:DELETE_PUBLICATIONS_FAILURE,
    payload:error
})


