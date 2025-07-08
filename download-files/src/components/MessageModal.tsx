import React from 'react';

interface MessageModalProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="message-modal" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose} className="message-modal-button">
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageModal;