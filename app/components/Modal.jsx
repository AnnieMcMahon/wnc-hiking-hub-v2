import React from "react";
import "./Modal.css"; // Add your styles here

function Modal({ isOpen, title, message, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          {onConfirm && (
            <button onClick={onConfirm} className="modal-confirm">
              OK
            </button>
          )}
          <button onClick={onClose} className="modal-close">
            {onConfirm ? "Cancel" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;