import {auth} from '../config/firebase'

 const functions = {
    getUser: () =>{
        return {
            userid: auth().currentUser.uid,
            userName:auth().currentUser.displayName,
            userEmail:auth().currentUser.email,
            photoURL:auth().currentUser.photoURL,
            authenticated: true
        }
    }
}

export default functions