import React from 'react';

function ProfileTabs() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #ccc',
        padding: '10px 0',
        marginBottom: '10px',
        background: '#fff',
      }}
    >
      {/* Grid posts */}
      <span
        style={{
          fontSize: '22px',
          borderBottom: '2px solid black',
          paddingBottom: '6px',
          cursor: 'pointer',
        }}
      >
        ⊞
      </span>

      {/* Reels */}
      <span style={{ fontSize: '22px', cursor: 'pointer' }}>▶</span>

      {/* Refresh / Activity */}
      <span style={{ fontSize: '22px', cursor: 'pointer' }}>↻</span>

      {/* Tagged */}
      <span style={{ fontSize: '22px', cursor: 'pointer' }}>👤</span>
    </div>
  );
}

export default ProfileTabs;