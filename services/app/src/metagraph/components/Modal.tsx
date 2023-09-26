import React, { useEffect } from "react";
import "./Modal.css"; // Import your CSS file
const Modal = ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => {
    const modalClass = isOpen ? "modal show" : "modal";
    return (
      isOpen? <div className="overlay">
        <div className={modalClass}>{children}</div>
      </div> : null
    );
  };
export default Modal;
