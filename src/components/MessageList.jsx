import React from 'react';
import { decryptMessage } from '../utils/encryption'; // Importa la función

const MessageList = ({ messages, isEncrypted, onDeleteMessage }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
            <button onClick={() => onDeleteMessage(index)}>Eliminar</button>
            <small>{msg.timestamp}</small>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;