import React from 'react';
import { decryptMessage } from '../utils/encryption'; // Importa la función

const MessageList = ({ messages, isEncrypted }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => {
        const decryptedText = isEncrypted ? decryptMessage(msg.text) : msg.text;
        return (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender}:</strong>
            <p>{decryptedText}</p>
            {isEncrypted && (
              <button onClick={() => alert(decryptedText)}>
                Desencriptar
              </button>
            )}
            <small>{msg.timestamp}</small>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;