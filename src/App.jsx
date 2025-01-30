import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import EncryptionToggle from './components/EncryptionToggle';
import './styles.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isEncrypted, setIsEncrypted] = useState(false);
  const secretKey = 'mi-clave-secreta'; // Clave secreta para AES

  const encryptMessage = (message) => {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
  };

  const decryptMessage = (encryptedMessage) => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const handleSend = (message) => {
    const newMessage = {
      text: isEncrypted ? encryptMessage(message) : message,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="app">
      <h1>Encriptador de Mensajes</h1>
      <EncryptionToggle
        isEncrypted={isEncrypted}
        onToggle={() => setIsEncrypted(!isEncrypted)}
      />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default App;