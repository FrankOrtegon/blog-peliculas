const mongoose = require('mongoose')

const publicationSchema = mongoose.Schema({
   
    idCount:{type:String},

    name:{type:String, require: [true, 'Nombre es obligatorio']},

    category:{type:String,require: [true, 'Categoria es obligatoria']},

    description:{type:String, require: [true, 'Descripción es obligatoria'], minLength: [2, 'La longitud minima de la descripción es 10'],},

    like: {type: String},

    image: {type: String},

           
})

module.exports= mongoose.model('publication', publicationSchema)