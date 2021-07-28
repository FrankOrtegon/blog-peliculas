const publicationRepository = require('../../domain/publicationRepository');
const publicationSchema = require('../db/publicationsSchemas/publicationsSchema')
const publication = require('../../domain/publication');

module.exports = class extends publicationRepository{

    constructor(){
        super();
    }

    async save(publicationEntity){
        const {name, category, description, image} = publicationEntity

        const mongoosePublication = new publicationSchema({name, category, description, image})
        await mongoosePublication.save()
        return new publication(mongoosePublication._id,mongoosePublication.name,mongoosePublication.category,mongoosePublication.description ,mongoosePublication.image)
    }

    async findAll(){
        return publicationSchema.find({})
    }

    

    async delete(id){
        
        return publicationSchema.findOneAndDelete({_id:id})   
        
    }
}