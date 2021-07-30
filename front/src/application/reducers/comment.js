import { ADD_COMMENT, ADD_COMMENT_FAILURE, ADD_COMMENT_SUCCESS, LOAD_COMMENT, LOAD_COMMENT_FAILURE, LOAD_COMMENT_SUCCESS } from "../constants";

const initialState ={
    comment:[],
    error:null,
    loading:false
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case LOAD_COMMENT:
            return{...state, loading:true};
        case LOAD_COMMENT_SUCCESS:
            return{...state, loading:false, comment:action.payload, error:null};
        case LOAD_COMMENT_FAILURE:
            return{...state, loading:false, error:action.payload};
        case ADD_COMMENT:
            return{...state, loading:true}
        case ADD_COMMENT_SUCCESS:
            const commentAdd = state.comment
            commentAdd.push(action.payload)
            return{...state, loading:false, comment:commentAdd}
        case ADD_COMMENT_FAILURE:
            return{...state, loading:false, error:action.payload}
        default:
            return state;
    }

}

export default reducer