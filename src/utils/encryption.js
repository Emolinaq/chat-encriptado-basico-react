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
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv });
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    // Si el mensaje no se pudo desencriptar, devuelve el texto original
    if (!decryptedText) {
      console.warn('El mensaje no está encriptado o la clave es incorrecta.');
      return encryptedMessage;
    }

    return decryptedText;
  } catch (error) {
    console.error('Error al desencriptar el mensaje:', error);
    return encryptedMessage; // Devuelve el texto original si hay un error
  }
};

// Función para sanitizar la entrada del usuario
export const sanitizeInput = (input) => {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};