import React, { useState, useEffect } from 'react'; // Importa useEffect
import CryptoJS from 'crypto-js';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import EncryptionToggle from './components/EncryptionToggle';
import './styles.css';

const App = () => {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const [isEncrypted, setIsEncrypted] = useState(false);
  const secretKey = CryptoJS.enc.Utf8.parse('mi-clave-secreta-avanzada'); // Clave secreta para AES
  const iv = CryptoJS.enc.Utf8.parse('vector-inicializacion'); // Vector de inicialización

  const [username, setUsername] = useState('Usuario');

  const encryptMessage = (message) => {
    return CryptoJS.AES.encrypt(message, secretKey, { iv }).toString();
  };

  const decryptMessage = (encryptedMessage) => {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey, { iv });
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const sanitizeInput = (input) => {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  const handleSend = (message) => {
    const sanitizedMessage = sanitizeInput(message);
    const newMessage = {
      text: isEncrypted ? encryptMessage(sanitizedMessage) : sanitizedMessage,
      sender: username,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  const notifyNewMessage = () => {
    if (Notification.permission === 'granted') {
      new Notification('Nuevo mensaje recibido');
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      notifyNewMessage();
    }
  }, [messages]);

  const playNotificationSound = () => {
    const audio = new Audio('/notification-sound.mp3');
    audio.play();
  };

  useEffect(() => {
    if (messages.length > 0) {
      playNotificationSound();
    }
  }, [messages]);

  return (
    <div className="app">
      <h1>Encriptador de Mensajes</h1>
      <EncryptionToggle
        isEncrypted={isEncrypted}
        onToggle={() => setIsEncrypted(!isEncrypted)}
      />
      {/* Pasa isEncrypted y secretKey a MessageList */}
      <MessageList messages={messages} isEncrypted={isEncrypted} secretKey={secretKey} />
      <MessageInput onSend={handleSend} username={username} setUsername={setUsername} />
    </div>
  );
};

export default App;