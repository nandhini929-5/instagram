import React from 'react';

function ProfileHeader({ username, onSettingsClick }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 20px',
        borderBottom: '1px solid #eee',
        background: '#fff',
      }}
    >
      {/* Left icon */}
      <span style={{ fontSize: '22px', cursor: 'pointer' }}>+</span>

      {/* Username */}
      <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
        {username} ∨
      </span>

      {/* Menu icon - Settings click */}
      <span
        style={{ fontSize: '22px', cursor: 'pointer' }}
        onClick={onSettingsClick}  // ← ADD
      >
        ☰
      </span>
    </div>
  );
}

export default ProfileHeader;