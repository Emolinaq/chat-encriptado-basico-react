import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <p>{msg.text}</p>
          <small>{msg.timestamp}</small>
        </div>
      ))}
    </div>
  );
};

export default MessageList;