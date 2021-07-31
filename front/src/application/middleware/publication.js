import {LOAD_PUBLICATIONS, ADD_PUBLICATIONS, UPDATE_PUBLICATIONS, DELETE_PUBLICATIONS} from "../constants";
import {
    loadPublicationsFailure,
    loadPublicationsSuccess,
    addPublicationsSuccess,
    addPublicationsFailure,
    updatePublicationsSuccess,
    updatePublicationsFailure,
    deletePublicationsSuccess,
    deletePublicationsFailure, loadPublications
} from "../actions/publication"

const loadPublicationFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === LOAD_PUBLICATIONS) {
        try {
            const publications = await api.publication.loadPublication()
            dispatch(loadPublicationsSuccess(publications))
        } catch (error) {
            dispatch(loadPublicationsFailure(error))
        }
    }

}

const addPublicationFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === ADD_PUBLICATIONS) {
        try {
            const publications = await api.publication.createPublication(action.payload)
            dispatch(addPublicationsSuccess(publications))
            dispatch(loadPublications())
        } catch (error) {
            dispatch(addPublicationsFailure(error))
        }
    }

}

const updatePublicationFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === UPDATE_PUBLICATIONS) {
        try {
            const publications = await api.publication.updatePublication(action.payload)
            dispatch(updatePublicationsSuccess(publications))
        } catch (error) {
            dispatch(updatePublicationsFailure(error))
        }
    }

}

const deletePublicationFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);
    if (action.type === DELETE_PUBLICATIONS) {
        try {
            const publications = await api.publication.deletePublication(action.payload)
            dispatch(deletePublicationsSuccess(publications))
            dispatch(loadPublications())
        } catch (error) {
            dispatch(deletePublicationsFailure(error))
        }
    }

}
const middlewarePublication = [
    loadPublicationFlow,
    addPublicationFlow,
    updatePublicationFlow,
    deletePublicationFlow
]

export default middlewarePublication