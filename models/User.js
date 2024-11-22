const mongoose = require('mongoose');

// Esquema y Modelo de Usuario
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, // Nombre del usuario
  correo: { type: String, required: true, unique: true }, // Correo electrónico, único
  contraseña: { type: String, required: true }, // Contraseña cifrada
});

// Crear modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
