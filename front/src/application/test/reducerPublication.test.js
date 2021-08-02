
import reducer from "../reducers/publication";

import {
    loadPublications,
    addPublications,
    addPublicationsSuccess,
    addPublicationsFailure,
    updatePublications,
    updatePublicationsSuccess,
    updatePublicationsFailure,
} from "../actions/publication";

describe('reducer user test functions', () => {

    const dummyPublication = {
        id: "6104e77132484e0015f825fe",
        idCount:"QZDgALmPIONnW1qAWNl9NNNuNX63",
        name: "Rapido y furios",
        category: "Accion",
        description: "Esta es la descripción",
        voto: ""
    }

    const initialState ={
        publication:[],
        error : null
    };

    test('reducer LOAD_PUBLICATIONS case', () => {
        const action = loadPublications(dummyPublication)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, publication: dummyPublication})
    })

    test('reducer ADD_PUBLICATIONS case', () => {
        const action = addPublications(dummyPublication);
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, })
    })

    test('reducer ADD_PUBLICATIONS_SUCCESS case', () => {
        const action = addPublicationsSuccess(dummyPublication)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, publication: dummyPublication})
    })

    test('reducer ADD_PUBLICATIONS_FAILURE case', () => {
        const action = addPublicationsFailure("error add publication")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error add publication"})
    })

    
    
    test('reducer UPDATE_PUBLICATIONS case', () => {
        const action = updatePublications(dummyPublication)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer UPDATE_PUBLICATIONS_SUCCESS case', () => {
        const action = updatePublicationsSuccess(dummyPublication)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, publication: dummyPublication})
    })

    test('reducer UPDATE_PUBLICATIONS_FAILURE case', () => {
        const action = updatePublicationsFailure("error update publication")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error update publication"})
    })



})