const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es requerida']
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es requerido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Universidad', UniversidadSchema);
