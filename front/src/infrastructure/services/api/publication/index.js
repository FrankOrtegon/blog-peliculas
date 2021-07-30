//import axios from "axios";

const functions = {

    loadPublication: () => {
        //const response =  await axios.get('https://nameless-mountain-68003.herokuapp.com/api/publication/')
        //return response.data;
        const response = [{
            idCount:"TsOdQhKj0kNGF0aiNeJW4WxCGA22",
            id: "asdasda",
            name: "titulo",
            category: "Anime",
            description: "publication.descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }]
        return response
    },
    createPublication: (publication) => {
        return {
            id: publication.id,
            name: publication.name,
            category: publication.category,
            description: publication.description
        }
    },
    updatePublication: (publication) => {
        return {
            id: publication.id,
            name: publication.name,
            category: publication.category,
            description: publication.description
        }
    },
    deletePublication: (id) => {
        return {
            id: id
        }
    },


}

export default functions