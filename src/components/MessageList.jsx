import React from 'react';
import CryptoJS from 'crypto-js';



const MessageList = ({ messages, isEncrypted, secretKey }) => {
  const handleDecrypt = (encryptedMessage) => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <p>
            {isEncrypted ? handleDecrypt(msg.text) : msg.text}
            </p>
          {isEncrypted && (
      <button onClick={() => alert(handleDecrypt(msg.text))}>
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