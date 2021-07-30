import axios from "axios";

const functions = {
    createUser: async (user) => {
        const userToPost = {
            idUser: user.userid,
            email: user.email,
            urlPhoto: user.photoURL
        }
        await axios.post('https://blogmovie.herokuapp.com/api/add/user', userToPost);
    }
}

export default functions