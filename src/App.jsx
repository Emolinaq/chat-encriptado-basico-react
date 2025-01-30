import React, { useState, useEffect } from 'react';
import { encryptMessage, decryptMessage, sanitizeInput } from './utils/encryption';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import EncryptionToggle from './components/EncryptionToggle';
import './styles.css';

const App = () => {
  // Estado para los mensajes
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  // Guardar mensajes en localStorage
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Estado para la encriptación
  const [isEncrypted, setIsEncrypted] = useState(false);

  // Estado para el nombre de usuario
  const [username, setUsername] = useState('Usuario');

  // Instancia de Audio para notificaciones
  const [audio] = useState(new Audio('/notification-sound.mp3'));

  // Estado para el permiso de notificaciones
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  // Función para solicitar permiso de notificaciones
  const requestNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission);
        if (permission === 'granted') {
          console.log('Permiso para notificaciones concedido');
        } else {
          console.warn('Permiso para notificaciones denegado');
        }
      });
    }
  };

  // Solicitar permiso de notificaciones al cargar la aplicación
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  // Función para enviar mensajes
  const handleSend = (message) => {
    const sanitizedMessage = sanitizeInput(message);
    const newMessage = {
      text: isEncrypted ? encryptMessage(sanitizedMessage) : sanitizedMessage,
      sender: username,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);

    // Reproducir audio solo si el usuario ha interactuado con la página
    if (document.hasFocus()) {
      audio.play().catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  };

  // Función para notificar nuevos mensajes
  const notifyNewMessage = (message) => {
    if (Notification.permission === 'granted') {
      new Notification('Nuevo mensaje recibido', {
        body: `${message.sender}: ${message.text}`,
      });
    }
  };

  // Notificar nuevos mensajes
  useEffect(() => {
    if (messages.length > 0) {
      notifyNewMessage(messages[messages.length - 1]);
    }
  }, [messages]);

  return (
    <div className="app">
      <h1>Encriptador de Mensajes</h1>

      {/* Botón para habilitar notificaciones */}
      {notificationPermission !== 'granted' && (
        <button onClick={requestNotificationPermission}>
          Habilitar Notificaciones
        </button>
      )}

      {/* Toggle para encriptación */}
      <EncryptionToggle
        isEncrypted={isEncrypted}
        onToggle={() => setIsEncrypted(!isEncrypted)}
      />

      {/* Lista de mensajes */}
      <MessageList messages={messages} isEncrypted={isEncrypted} />

      {/* Entrada de mensajes */}
      <MessageInput onSend={handleSend} username={username} setUsername={setUsername} />
    </div>
  );
};

export default App;