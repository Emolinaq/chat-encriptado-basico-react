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
        />
      </label>
    </div>
  );
};

export default EncryptionToggle;