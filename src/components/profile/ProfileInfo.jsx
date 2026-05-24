import React from 'react';

function ProfileInfo({ user2, name, username, bio }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '24px 20px',
        alignItems: 'flex-start',
        background: '#fff',
      }}
    >
      {/* DP */}
      <img
        src={user2}
        alt="profile"
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{ flex: 1, textAlign: 'left' }}>
        
        {/* NAME ROW */}
        <h3 style={{ margin: '0 0 10px 0' }}>
          {name}
        </h3>

        {/* STATS ROW */}
        <div
          style={{
            display: 'flex',
            gap: '25px',
            marginBottom: '10px',
          }}
        >
          <div>
            <strong>2</strong>
            <p style={{ margin: 0, fontSize: '12px' }}>Posts</p>
          </div>

          <div>
            <strong>148</strong>
            <p style={{ margin: 0, fontSize: '12px' }}>Followers</p>
          </div>

          <div>
            <strong>580</strong>
            <p style={{ margin: 0, fontSize: '12px' }}>Following</p>
          </div>
        </div>

        {/* BIO */}
        <p style={{ margin: 0, fontSize: '13px' }}>
          {bio}
        </p>

        {/* USERNAME small line (optional like IG) */}
        <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#555' }}>
          @{username}
        </p>

      </div>
    </div>
  );
}

export default ProfileInfo;