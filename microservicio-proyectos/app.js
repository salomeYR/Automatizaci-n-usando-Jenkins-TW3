const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/proyectos', require('./routes/proyecto'));

module.exports = app;
