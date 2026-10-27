import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          minWidth: '350px',
          maxWidth: '500px'
        }}
      >
        <button onClick={onClose} style={{ float: 'right' }}>✕</button>
        {children}
      </div>
    </div>,
    document.body // Destino del portal
  );
}

export default Modal;