const functions = {

    loadComment: () => {
        const commentOne = [{
            idComment: "1",
            content: "Primer comentario"
        }, {
            idComment: "2",
            content: "Segundo comentario"
        }]
        return commentOne;
    },

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
    deleteComment:(idComment)=>{
        return{
           
        }
=======
    deleteComment: (idComment) => {
        return {}
>>>>>>> f48aad578bc061ab5906cfeba29bdd0989b23465
    }

}


export default functions