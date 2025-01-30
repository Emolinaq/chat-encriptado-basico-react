import React, { useState, useEffect } from 'react';
import { encryptMessage, decryptMessage, sanitizeInput } from './utils/encryption'; // Importa las funciones
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
  const [username, setUsername] = useState('Usuario');
  const [audio] = useState(new Audio('/notification-sound.mp3'));

  const handleSend = (message) => {
    const sanitizedMessage = sanitizeInput(message); 
    const newMessage = {
      text: isEncrypted ? encryptMessage(sanitizedMessage) : sanitizedMessage, 
      sender: username,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);

    if (document.hasFocus()) {
      audio.play().catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }


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


  return (
    <div className="app">
      <h1>Encriptador de Mensajes</h1>
      <EncryptionToggle
        isEncrypted={isEncrypted}
        onToggle={() => setIsEncrypted(!isEncrypted)}
      />
      <MessageList messages={messages} isEncrypted={isEncrypted} />
      <MessageInput onSend={handleSend} username={username} setUsername={setUsername} />
    </div>
  );
};

export default App;