import axios from "axios";

const functions = {
    getCount: async (userId) => {
        const response = await axios.get('https://blogmovie.herokuapp.com/api/get/count/' + userId);
        return response.data;
    },
    createCount: async (userId) => {
        const count = {
            idCount: userId,
            name: "Nan",
            phone: "Nan",
            plan: false
        }
        const response = await axios.post('https://blogmovie.herokuapp.com/api/add/count', count);
        return response.data
    },
    updateCount: async (count) => {
        const response = await axios.put('https://blogmovie.herokuapp.com/api/update/count', count);
        return response.data
    }
    ,
}

export default functions