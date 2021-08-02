import reducer from "../reducers/user";
import {
    loadCount,
    loginUser,
    loginUserFailure,
    loginUserSuccess,
    logOutUser,
    updateCount, updateCountFailure,
    updateCountSuccess,
    loadPublications,
    loadPublicationsFailure, 
    loadPublicationsSuccess,
    addPublications,
    addPublicationsSuccess,
    addPublicationsFailure,
    updatePublications,
    updatePublicationsSuccess,
    updatePublicationsFailure,
    deletePublications,
    deletePublicationsSuccess,
    deletePublicationsFailure
} from "../actions/user";

describe('reducer user test functions', () => {

    const dummyUser = {
        userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        userName: "sebastian cano",
        userEmail: "sebas.cano1036@gmail.com",
        photoURL: "https://lh3.googleusercontent.com/a/AATXAJy86dPBpC-LgdzOV4B7mcHbkRdPoUGPWDQv-9L6=s96-c",
        authenticated: false
    }

    const dummyCount = {
        userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        name: "Pancho",
        phone: "3058935598",
        plan: "false",
    }

    const dummyComment = {
        idComment : "1",
        idPublication : "2",
        idCount : "3",
        content : "Comentario"
    }

    const initialState = {
        user: {authenticated: false},
        count: {plan: false},
        error: null
    };

    test('reducer LOGIN_USER case', () => {
        const action = loginUser();
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer LOGIN_USER_SUCCESS case', () => {
        const action = loginUserSuccess(dummyUser)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, user: dummyUser})
    })

    test('reducer LOGIN_USER_FAILURE case', () => {
        const action = loginUserFailure("error user login")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error user login"})
    })

    test('reducer LOGOUT_USER case', () => {
        const action = logOutUser();
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer LOAD_COUNT case', () => {
        const action = loadCount(dummyCount)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, count: dummyCount})
    })

    test('reducer UPDATE_COUNT case', () => {
        const action = updateCount(dummyCount)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer UPDATE_COUNT_SUCCESS case', () => {
        const action = updateCountSuccess(dummyCount)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, count: dummyCount})
    })

    test('reducer UPDATE_COUNT_FAILURE case', () => {
        const action = updateCountFailure("error update count")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error update count"})
    })

    test('reducer UPDATE_COUNT case', () => {
        const action = updateCount(dummyCount)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer UPDATE_COUNT_SUCCESS case', () => {
        const action = updateCountSuccess(dummyCount)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, count: dummyCount})
    })

    test('reducer UPDATE_COUNT_FAILURE case', () => {
        const action = updateCountFailure("error update count")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error update count"})
    })

    test('reducer LOGIN_COMMENT case', () => {
        const action = loginComment();
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState})
    })

    test('reducer LOGIN_COMMENT_SUCCESS case', () => {
        const action = loginCommentSuccess(dummyComment)
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, comment: dummyComment})
    })

    test('reducer LOGIN_COMMENT_FAILURE case', () => {
        const action = loginCommentFailure("error comment login")
        const state = reducer(initialState, action);
        expect(state).toEqual({...initialState, error: "error comment login"})
    })
})