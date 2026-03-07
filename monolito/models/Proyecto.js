const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'El numero es requerido'],
        unique: true
    },
    titulo: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'La fecha de iniciacion es requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'La fecha de entrega es requerida']
    },
    valor: {
        type: Number,
        required: [true, 'El valor es requerido']
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
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

module.exports = model('Proyecto', ProyectoSchema);
