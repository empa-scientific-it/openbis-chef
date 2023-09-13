import React from 'react';
import './Modal.css'; // Import your CSS file
import './Workflow.css'
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        {children}
        <button className="clickable-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;