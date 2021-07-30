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
    }
    
}


export default functions