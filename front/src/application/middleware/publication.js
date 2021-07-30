import { LOAD_PUBLICATIONS, ADD_PUBLICATIONS, UPDATE_PUBLICATIONS, DELETE_PUBLICATIONS } from "../constants";
import {loadPublicationsFailure, 
    loadPublicationsSuccess,
    addPublicationsSuccess,
    addPublicationsFailure,
    updatePublicationsSuccess,
    updatePublicationsFailure,
    deletePublicationsSuccess,
    deletePublicationsFailure
} from "../actions/publication"

const loadPublicationFlow= ({api}) => ({dispatch})=>next => async (action) =>{
    next(action);
    if(action.type === LOAD_PUBLICATIONS){
        try{
            const publications = await api.publication.loadPublication()
            console.log(publications)
            dispatch(loadPublicationsSuccess(publications))

        }catch(error){
            dispatch(loadPublicationsFailure(error))
        }
    }

}

const addPublicationFlow= ({api}) => ({dispatch})=>next => async (action) =>{
    next(action);
    
    if(action.type === ADD_PUBLICATIONS){

        try{
            
            const publications = await api.publication.createPublication(action.payload)
            console.log(publications)
            dispatch(addPublicationsSuccess(publications))

        }catch(error){
            dispatch(addPublicationsFailure(error))
        }
    }

}

const updatePublicationFlow= ({api}) => ({dispatch})=>next => async (action) =>{
    next(action);
    if(action.type === UPDATE_PUBLICATIONS){
        try{
            const publications = await api.publication.updatePublication(action.payload)
            console.log(publications)
            dispatch(updatePublicationsSuccess(publications))

        }catch(error){
            dispatch(updatePublicationsFailure(error))
        }
    }

}

const deletePublicationFlow= ({api}) => ({dispatch})=>next => async (action) =>{
    next(action);
    if(action.type === DELETE_PUBLICATIONS){
        try{
            const publications = await api.publication.deletePublication()
            console.log(publications)
            dispatch(deletePublicationsSuccess(publications))

        }catch(error){
            dispatch(deletePublicationsFailure(error))
        }
    }

}
const middlewarePublication =[
    loadPublicationFlow,
    addPublicationFlow,
    updatePublicationFlow,
    deletePublicationFlow
]

export default middlewarePublication