import { ADD_PUBLICATIONS, 
    ADD_PUBLICATIONS_FAILURE, 
    ADD_PUBLICATIONS_SUCCESS, 
    LOAD_PUBLICATIONS, 
    LOAD_PUBLICATIONS_FAILURE, 
    LOAD_PUBLICATIONS_SUCCESS,
    UPDATE_PUBLICATIONS,
    UPDATE_PUBLICATIONS_SUCCESS,
    UPDATE_PUBLICATIONS_FAILURE,
    DELETE_PUBLICATIONS,
    DELETE_PUBLICATIONS_SUCCESS,
    DELETE_PUBLICATIONS_FAILURE

} from "../constants";

const initialState ={
    publication:[],
    error : null,
    loading:false
};

const reducer = (state = initialState, action) =>{
    switch (action.type){
        case LOAD_PUBLICATIONS:
            return {...state, loading:true};
        case LOAD_PUBLICATIONS_SUCCESS:
            return {...state, loading:false, publication:action.payload, error:null};
        case LOAD_PUBLICATIONS_FAILURE:
            return {...state, loading:false, error:action.payload};
        case ADD_PUBLICATIONS:
            return {...state, loading:true};
        case ADD_PUBLICATIONS_SUCCESS:
            const publicationAdd = state.publication
            publicationAdd.push(action.payload)
            return {...state, loading:false, publication:publicationAdd };
        case ADD_PUBLICATIONS_FAILURE:
            return {...state, loading:false, error:action.payload};
        case UPDATE_PUBLICATIONS:
            return {...state, loading:true};
        case UPDATE_PUBLICATIONS_SUCCESS:
            const publicationUpdate = state.publication
            publicationUpdate.push(action.payload)
            return {...state, loading:false, publication:publicationUpdate };
        case UPDATE_PUBLICATIONS_FAILURE:
            return {...state, loading:false, error:action.payload };
        case DELETE_PUBLICATIONS:
            return {...state, loading:true};
        case DELETE_PUBLICATIONS_SUCCESS:
            return {...state, loading:false};
        case DELETE_PUBLICATIONS_FAILURE:
            return {...state, loading:false, error:action.payload};
        default:
            return state;   
    }
}

export default reducer