import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '86px',
      right: '24px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '380px'
    }}>
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '14px 18px',
              backgroundColor: isSuccess 
                ? '#1B3B2B' 
                : isWarning 
                  ? '#4A2800' 
                  : '#161917',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${isSuccess ? '#2E7D32' : isWarning ? '#ED6C02' : 'rgba(255,255,255,0.15)'}`,
              boxShadow: 'var(--shadow-lg)',
              animation: 'fadeIn 0.3s ease-out',
              fontSize: '0.88rem',
              lineHeight: 1.4
            }}
          >
            <div style={{ marginTop: '2px', flexShrink: 0 }}>
              {isSuccess ? (
                <CheckCircle2 size={18} color="#4CAF50" />
              ) : isWarning ? (
                <AlertCircle size={18} color="#FF9800" />
              ) : (
                <Info size={18} color="#64B5F6" />
              )}
            </div>
            <div style={{ flex: 1 }}>{toast.message}</div>
          </div>
        );
      })}
    </div>
  );
};
