import React from 'react';

function ProfileActions({ setShowEditProfile, setShowShareProfile }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        padding: '0 20px',
        marginBottom: '20px',
        flexWrap: 'wrap',
      }}
    >
      {/* Edit Profile */}
      <button
        onClick={() => setShowEditProfile(true)}
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontWeight: '600',
          background: '#f0f0f0',
          cursor: 'pointer',
        }}
      >
        Edit profile
      </button>

      {/* Share Profile */}
      <button
        onClick={() => setShowShareProfile(true)}
        style={{
          flex: 1,
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontWeight: '600',
          background: '#f0f0f0',
          cursor: 'pointer',
        }}
      >
        Share profile
      </button>

      {/* Add Friend */}
      <button
        style={{
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: '#f0f0f0',
          cursor: 'pointer',
        }}
      >
        👤+
      </button>
    </div>
  );
}

export default ProfileActions;