const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/tipo-proyectos', require('./routes/tipoProyecto'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/universidades', require('./routes/universidad'));
app.use('/api/etapas', require('./routes/etapa'));
app.use('/api/proyectos', require('./routes/proyecto'));

module.exports = app;
