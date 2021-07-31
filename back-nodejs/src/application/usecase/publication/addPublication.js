const publication = require('../../../domain/publication')

async function addPublication(idCount, name, category, description, publicationRepository){
    if(!name){
        return {errorMessage:"Se debe llenar el campo del nombre",
    succes:false};
    }

    const publi = new publication(null,idCount, name, category, description)
    return publicationRepository.save(publi)
}

module.exports = {addPublication}