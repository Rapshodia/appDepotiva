const mongoose = require("mongoose");

const EsquemaApuesta = new mongoose.Schema({
    nombreLocal: {
        type: String,
        required: [true, "Nombre es obligatorio."],
        minlength: [2, "Nombre debe tener al menos 2 caracteres"],
        
    },
    
    imagenLocal: {
        type: Boolean,
        default: false
    },
    nombreVisita: {
        type: String,
        required: [true, "Nombre es obligatorio."],
        minlength: [2, "Nombre debe tener al menos 2 caracteres"],
        
    },
    
    imagenVisita: {
        type: Boolean,
        default: false
    },
   
}, {timestamps: true, versionKey: false})

const Apuesta = mongoose.model("Apuestas", EsquemaApuesta);
module.exports = Apuesta;