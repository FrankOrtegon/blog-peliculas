import axios from "axios";

const functions = {
    getCount: (userId) =>{
        const idFake="intento3"
        axios.get('https://blogmovie.herokuapp.com/api/get/count/'+idFake).then(response => {
            console.log(response)
            const count = response.data;
            console.log(count)
        })

        return {
            userid: userId,
            name:"Pancho",
            phone:"3058935598",
            plan:false
        }
    },
    createCount: (userId) => {
        const count = {
            userid:userId,
            name: "",
            phone:"",
            plan:false
        }
        axios.post('https://blogmovie.herokuapp.com/api/add/count',{count}).then(response => {
            console.log(response)
            const data = response.data;
            console.log(data)
        })
        return{
            userid:userId,
            name: "",
            phone:"",
            plan:false
        }
    },
    updateCount: (count) => {

        axios.put('https://blogmovie.herokuapp.com/api/update/count',{count}).then(response => {
            console.log(response)
            const data = response.data;
            console.log(data)
        })
        return{
            userid:count.userid,
            name: count.name,
            phone: count.phone,
            plan: count.plan
        }
    },
}

export default functions