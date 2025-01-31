import React from 'react';

const EncryptionToggle = ({ isEncrypted, onToggle }) => {
  return (
    <div className="encryption-toggle">
      <label>
        Encriptar mensajes:
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={onToggle}
          aria-label="Encriptar mensajes"
        />
      </label>
      <span>{isEncrypted ? '🔒' : '🔓'}</span>
    </div>
  );
};

export default EncryptionToggle;