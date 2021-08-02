'use strict';

class Publication {
    constructor (id,idCount, name, category, description, voto){
        this.id = id;
        this.idCount = idCount;
        this.name=name;
        this.description=description;
        this.category=category;
        this.voto=voto;
    
    };
}

module.exports = Publication;
