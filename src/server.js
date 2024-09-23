// src/server.js
const app = require('./app');
const connectDB = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
})();
