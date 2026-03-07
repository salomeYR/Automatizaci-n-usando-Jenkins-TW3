const mongoose = require('mongoose');
require('dotenv').config();

// Importar modelos
const TipoProyecto = require('./models/TipoProyecto');
const Etapa = require('./models/Etapa');
const Cliente = require('./models/Cliente');
const Universidad = require('./models/Universidad');
const Proyecto = require('./models/Proyecto');

const seed = async () => {
    try {
        console.log('Conectando a la base de datos para sembrar datos...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Limpiando colecciones existentes...');

        // Limpiar datos previos
        await Promise.all([
            TipoProyecto.deleteMany({}),
            Etapa.deleteMany({}),
            Cliente.deleteMany({}),
            Universidad.deleteMany({}),
            Proyecto.deleteMany({})
        ]);

        console.log('Insertando Tipos de Proyecto...');
        const tipos = await TipoProyecto.insertMany([
            { nombre: 'ensayo' },
            { nombre: 'artículo' },
            { nombre: 'monografía' },
            { nombre: 'trabajo final de pregrado' },
            { nombre: 'trabajo final de especialización' }
        ]);

        console.log('Insertando Etapas...');
        const etapas = await Etapa.insertMany([
            { nombre: 'anteproyecto' },
            { nombre: 'entrega parcial 1' },
            { nombre: 'entrega parcial 2' },
            { nombre: 'entrega final' }
        ]);

        console.log('Insertando Cliente y Universidad...');
        const cliente = await new Cliente({ nombre: 'Juan Pérez', email: 'juan.perez@example.com' }).save();
        const universidad = await new Universidad({
            nombre: 'IUDigital de Antioquia',
            direccion: 'Calle 123 #45-67',
            telefono: '1234567'
        }).save();

        console.log('Insertando Proyecto de prueba...');
        await new Proyecto({
            numero: 'PRY-001',
            titulo: 'Análisis de Datos con NoSQL',
            fechaIniciacion: new Date('2024-01-01'),
            fechaEntrega: new Date('2024-06-01'),
            valor: 5000000,
            cliente: cliente._id,
            tipoProyecto: tipos[2]._id, // monografía
            universidad: universidad._id,
            etapa: etapas[0]._id // anteproyecto
        }).save();

        console.log('\n--- ÉXITO: Datos de prueba insertados exitosamente en Atlas ---');
        process.exit(0);
    } catch (error) {
        console.error('Error sembrando datos:', error);
        process.exit(1);
    }
};

seed();
