'use strict';

class Publication {
    constructor (id,idCount, name, category, description, image){
        this.id = id;
        this.idCount = idCount;
        this.name=name;
        this.description=description;
        this.category=category;
    
    };
}

module.exports = Publication;
