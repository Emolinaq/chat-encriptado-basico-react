import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const MessageInput = ({ onSend, username, setUsername }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="message-input">
      <TextField
        label="Tu nombre"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Escribe un mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleSend}>
        Enviar
      </Button>
    </div>
  );
};

export default MessageInput;
