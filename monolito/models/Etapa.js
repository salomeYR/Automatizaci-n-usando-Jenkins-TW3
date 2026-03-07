const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido'],
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final']
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

module.exports = model('Etapa', EtapaSchema);
