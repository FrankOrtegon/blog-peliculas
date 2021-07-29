import { LOAD_PUBLICATIONS } from "../constants";
import {loadPublicationsFailure, loadPublicationsSuccess} from "../actions/publication"

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

const middlewarePublication =[
    loadPublicationFlow,
]

export default middlewarePublication