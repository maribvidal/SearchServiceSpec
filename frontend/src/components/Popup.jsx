import { useEffect } from "react";

const aux_time = 3000;

function Popup({ message, isVisible, onClose }) {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, aux_time)
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose])

    if (!isVisible) return null; // Si no se puede ver, no mostrar nada.

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#ff4d4f',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            zIndex: 9999
        }}>
            <span>{message}</span>
            <button 
                onClick={onClose} 
                style={{ 
                    background: 'none', border: 'none', color: 'white', 
                    cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' 
                }}
            >
                ✕
            </button>
        </div>
    );
}

export default Popup;