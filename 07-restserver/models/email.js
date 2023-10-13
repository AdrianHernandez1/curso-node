const { Schema, model } = require("mongoose");

const CorreoSchema = Schema({
    correo:{
        type: String,
        require: [true, 'El correo es obligatorio'],
        unique: true
    }
});

module.exports = model('Email', CorreoSchema)