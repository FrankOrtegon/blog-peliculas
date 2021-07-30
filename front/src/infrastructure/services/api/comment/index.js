import { deleteComment } from "../../../../application/actions/comment";

const functions = {

    loadComment:()=>{
        const commentOne = [{
            idComment:"1",
            content :"Primer comentario"
        },{
            idComment:"2",
            content : "Segundo comentario"
        }]
        return commentOne;
    },

    addComment:()=>{
        return{
            idComment:"12",
            idPublication:"1",
            idCount:"12",
            content:"Este es el comentario"
        }
    },

    updateComment:(comment)=>{
        return {
            idComment:comment.idComment,
            idPublication: comment.idPublication,
            idCount: comment.idCount,
            content: comment.content
        }
    },

    deleteComment:(idComment)=>{
        return{
            
        }
    }
    
}


export default functions