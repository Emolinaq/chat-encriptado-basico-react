const crypto = require('crypto');

// Generar clave secreta de 32 bytes para AES-256
const secretKey = crypto.randomBytes(32).toString('hex');

// Generar vector de inicialización de 16 bytes
const iv = crypto.randomBytes(16).toString('hex');

console.log(`Clave Secreta: ${secretKey}`);
console.log(`Vector de Inicialización: ${iv}`);

//Ejecutar en el terminal :
// node generateKeys.js para que genere las claves que se usaran en el .env
// copiar las claves en el .env en su respectivo valor.

//claves de prueba:

//REACT_APP_SECRET_KEY 4f3c2a1b5e6d7f8e9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p
//REACT_APP_KEY_VI 1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p

