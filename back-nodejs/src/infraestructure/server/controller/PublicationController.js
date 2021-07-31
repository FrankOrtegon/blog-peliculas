let {addPublication} = require('../../../application/usecase/publication/addPublication')
let {getPublication} = require('../../../application/usecase/publication/getPublication')
let {getByCategory} = require('../../../application/usecase/publication/getPublication')
let {deletePublication} = require('../../../application/usecase/publication/deletePublication')
let {updatePublication} = require('../../../application/usecase/publication/updatePublication')


const mongoPublicationRepository = require ('../../repository/mongoPublicationRepository')

async function createPublication (req,res){
    try{
        const {idCount, name, category, description, image}=req.body
        let publication=await addPublication(idCount, name, category, description, image, mongoPublicationRepository.prototype)
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

async function removePublication(req, res) {
    try {
        const { id } = req.params;
        console.log(id)
        res.json(await deletePublication(id, mongoPublicationRepository.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}

async function modificPublication(req, res) {
    try {
        const { id, name, category, description } = req.body;
        res.json(await updatePublication(id, name, category, description, mongoPublicationRepository.prototype))
    } catch (error) {
        res.status(500).send(error);
    }
}
  
async function getPublicationByCategory(req, res) {
    try {
        const { category } = req.params;
        console.log(category)
        res.json(await getByCategory(category, mongoPublicationRepository.prototype));
    } catch (error) {
        res.status(500).send(error);
    }
}



module.exports ={createPublication, listPublications, removePublication, modificPublication,getPublicationByCategory}
