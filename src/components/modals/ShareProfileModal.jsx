import React from 'react';

function ShareProfileModal({ username, setShowShareProfile }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background:
          'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        onClick={() => setShowShareProfile(false)}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          fontSize: '24px',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        ✕
      </span>

      <div
        style={{
          background: '#fff',
          padding: 24,
          borderRadius: 16,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            background: '#eee',
            margin: '0 auto 12px',
            borderRadius: 8,
          }}
        ></div>

        <strong>@{username}</strong>
      </div>
    </div>
  );
}

export default ShareProfileModal;