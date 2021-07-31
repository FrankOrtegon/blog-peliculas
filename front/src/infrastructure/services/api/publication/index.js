import axios from "axios";

const functions = {

    loadPublication: async () => {
        const response = await axios.get('https://nameless-mountain-68003.herokuapp.com/api/publication/')
        return response.data
    },
    createPublication: async (publication) => {
        const response = await axios.post('https://nameless-mountain-68003.herokuapp.com/api/publication/', publication)
        return response.data
    },
    updatePublication: (publication) => {
        return {
            id: publication.id,
            name: publication.name,
            category: publication.category,
            description: publication.description
        }
    },
    deletePublication: async (idPublication) => {
        await axios.delete('https://nameless-mountain-68003.herokuapp.com/api/publication/'+idPublication).then(() => {
            return idPublication
        }).catch(error=>{
            return error
        })
    },


}

export default functions