import CryptoJS from 'crypto-js';

// Clave secreta y vector de inicialización (IV)
const secretKey = CryptoJS.enc.Utf8.parse('mi-clave-secreta-avanzada');
const iv = CryptoJS.enc.Utf8.parse('vector-inicializacion');

// Función para encriptar un mensaje
export const encryptMessage = (message) => {
  return CryptoJS.AES.encrypt(message, secretKey, { iv }).toString();
};

// Función para desencriptar un mensaje
export const decryptMessage = (encryptedMessage) => {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv });
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Función para sanitizar la entrada del usuario
export const sanitizeInput = (input) => {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};