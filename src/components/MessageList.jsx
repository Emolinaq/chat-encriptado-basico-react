import React from 'react';
import { decryptMessage } from '../utils/encryption'; // Importa la función

const MessageList = ({ messages, isEncrypted }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <p>
            {/* Muestra el mensaje desencriptado si está encriptado */}
            {isEncrypted ? decryptMessage(msg.text) : msg.text}
          </p>
          {/* Botón para desencriptar (opcional) */}
          {isEncrypted && (
            <button onClick={() => alert(decryptMessage(msg.text))}>
              Desencriptar
            </button>
          )}
          <small>{msg.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default MessageList;