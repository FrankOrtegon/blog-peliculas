let {addPublication} = require('../../../application/usecase/publication/addPublication')
let {getPublication} = require('../../../application/usecase/publication/getPublication')
let {deletePublication} = require('../../../application/usecase/publication/deletePublication')

const mongoPublicationRepository = require ('../../repository/mongoPublicationRepository')

async function createPublication (req,res){
    try{
        const {name, category, description, image}=req.body
        let publication=await addPublication(name, category, description, image, mongoPublicationRepository.prototype)
        res.json(publication)
    }catch(error){
        res.status(500).send(error);
    }
}

async function listPublications(req,res){
    try{
        let publica=await getPublication(mongoPublicationRepository.prototype)
        res.json(publica)
    }catch(error){
        res.status(500).send(error);
    }
}

async function removePublication(req,res){
    try {
        const{_id}=req.body
        let publica=await deletePublication(_id,mongoPublicationRepository.prototype)
        res.json(publica)
    } catch (error) {
        res.status(500).send(error);
    }
}



module.exports ={createPublication, listPublications, removePublication}