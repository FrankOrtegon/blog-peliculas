const functions = {

    loadPublication:()=>{
        const publicOne =  [{
            name:"nombre 1",
            category:"terror",
            description:"esta es la descripcion"
        },{
            name:"nombre 2",
            category:"terror",
            description:"esta es la descripcion"
        }]

        return publicOne;
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