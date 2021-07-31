import axios from "axios";

const functions = {

    loadComment: async () => {
        const response = await axios.get('https://blogmovie.herokuapp.com/api/get/')
        return response.data;
    },

<<<<<<< HEAD
    addComment: async (comment) => {
        const response = await axios.post('https://blogmovie.herokuapp.com/api/add/', comment)
        return response.data
=======
<<<<<<< HEAD
    addComment:(idComment)=>{
        return{
            idComment:idComment,
            idPublication:"1",
            idCount:"12",
            content:"Este es el comentario"
=======
    addComment: () => {
        return {
            idComment: "12",
            idPublication: "1",
            idCount: "12",
            content: "Este es el comentario"
>>>>>>> f48aad578bc061ab5906cfeba29bdd0989b23465
        }
>>>>>>> cb12ad3c8db6f0bc82a3d0f97f011c69260c1d7a
    },

    updateComment: (comment) => {
        return {
            idComment: comment.idComment,
            idPublication: comment.idPublication,
            idCount: comment.idCount,
            content: comment.content
        }
    },

<<<<<<< HEAD
    deleteComment: async (idComment) => {
        await axios.delete('https://blogmovie.herokuapp.com/api/delete/'+idComment).then(() =>{
            return idComment
        }).catch(error => {
            return error
        })
=======
<<<<<<< HEAD
    deleteComment:(idComment)=>{
        return{
           
        }
=======
    deleteComment: (idComment) => {
        return {}
>>>>>>> f48aad578bc061ab5906cfeba29bdd0989b23465
>>>>>>> cb12ad3c8db6f0bc82a3d0f97f011c69260c1d7a
    }

}


export default functions