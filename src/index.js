// src/index.js
const express = require('express');
const fifoRoutes = require('./routes/fifoRoutes');
// Otras rutas...

const app = express();

app.use(express.json()); // Para manejar JSON en las peticiones

// Rutas de las colas
app.use('/api/fifo', fifoRoutes);
// Otras rutas...

module.exports = app;
