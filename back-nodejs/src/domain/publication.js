'use strict';

class Publication {
    constructor (id,idCount, name, category, description, like, image){
        this.id = id;
        this.idCount = idCount;
        this.name=name;
        this.description=description;
        this.category=category;
        this.like=like;
        this.image=image;
    
    };
}

module.exports = Publication;
