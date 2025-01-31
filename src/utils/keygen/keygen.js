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

