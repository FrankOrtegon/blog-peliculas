import axios from "axios";

const functions = {

    loadComment: async () => {
        const response = await axios.get('https://blogmovie.herokuapp.com/api/get/')
        return response.data;
    },

    addComment: async (comment) => {
        const response = await axios.post('https://blogmovie.herokuapp.com/api/add/', comment)
        return response.data
    },

    updateComment: (comment) => {
        return {
            idComment: comment.idComment,
            idPublication: comment.idPublication,
            idCount: comment.idCount,
            content: comment.content
        }
    },

    deleteComment: async (idComment) => {
        await axios.delete('https://blogmovie.herokuapp.com/api/delete/' + idComment).then(() => {
            return idComment
        }).catch(error => {
            return error
        })
    }

}


export default functions