const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Middleware para ver qué instancia responde
app.use((req, res, next) => {
    console.log(`Petición atendida por la instancia: ${process.env.HOSTNAME || 'Desconocida'}`);
    next();
});

// Routes
app.use('/api/proyectos', require('./routes/proyecto'));

module.exports = app;
