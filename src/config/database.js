// src/config/database.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;

let db;

async function connectDB() {
  if (db) return db; // Si ya está conectado, usa la conexión existente
  try {
    const client = await MongoClient.connect(uri);
    db = client.db(process.env.DB_NAME);
    console.log('Conectado a la base de datos');
    return db;
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
    process.exit(1); // Termina la aplicación si hay un error
  }
}

module.exports = connectDB;
