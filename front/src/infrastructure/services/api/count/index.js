const functions = {
    getCount: (userId) =>{
        return {
            userid: userId,
            name:"Pancho",
            phone:"3058935598",
            plan:false
        }
    },
    createCount: (userId) => {
        return{
            userid:userId,
            name: "",
            phone:"",
            plan:false
        }
    },
    updateCount: (count) => {
        return{
            userid:count.userid,
            name: count.name,
            phone: count.phone,
            plan: count.plan
        }
    },
}

export default functions