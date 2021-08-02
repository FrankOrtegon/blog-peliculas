const publicationRepository = require('../../domain/publicationRepository');
const publicationSchema = require('../db/publicationsSchemas/publicationsSchema')
const publication = require('../../domain/publication');

module.exports = class extends publicationRepository{

    constructor(){
        super();
    }

    async save(publicationEntity){
        const {idCount, name, category, description, voto} = publicationEntity

        const mongoosePublication = new publicationSchema({idCount, name, category, description, voto})
        await mongoosePublication.save()
        return new publication( mongoosePublication._id, mongoosePublication.idCount,mongoosePublication.name,mongoosePublication.category,mongoosePublication.description, mongoosePublication.voto )
    }

    async findAll(){
        return publicationSchema.find({})
    }

    async findById(){
        return publicationSchema.findById({_id: id})
    }

    async findByCategory(category){
        return await publicationSchema.find({category:category})

    }

    async delete(id) {
        return await publicationSchema.deleteOne({ _id: id });
    }

    async updatePublication(publicationModific) {
        console.log(publicationModific)
        /* 
        const {name, category, description} = publicationEntity
        const mongoosePublication = new publicationSchema({name, category, description}) */
        const {_id,name,category,description} = publicationModific
        await publicationSchema.updateOne({_id:_id},{name:name,category:category,description:description})
        return new publication(mongoosePublication._id,mongoosePublication.name,mongoosePublication.category,mongoosePublication.description )
           
    }

    

    


   
}