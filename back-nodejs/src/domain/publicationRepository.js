'use strict';

class PublicationRepository{

    save(publica){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAll(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findById(id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findByCategory(category){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    updatePublication(id, body) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }


    
}

module.exports = PublicationRepository;