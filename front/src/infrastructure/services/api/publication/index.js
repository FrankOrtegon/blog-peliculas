import axios from "axios";

const functions = {

    loadPublication:()=>{
        axios.get('https://nameless-mountain-68003.herokuapp.com/api/publication/').then(response =>{
            console.log(response)
            const list = response.data;
            console.log(list)
        })
    },
    createPublication: (publication) => {
        return{
            id:publication.id,
            name: publication.name,
            category: publication.category,
            description: publication.description
        }
    },
    updatePublication: (publication) => {
        return{
            id:publication.id,
            name: publication.name,
            category: publication.category,
            description: publication.description
        }
    },
    deletePublication: (id) => {
        return{
            id:id
        }
    },

    
}

export default functions