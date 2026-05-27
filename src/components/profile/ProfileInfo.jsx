import React from 'react';

function ProfileInfo({ user2, name, username, bio, postsCount, followersCount, followingCount }) {
  return (
    <div style={{
      display: 'flex',
      gap: '40px',
      padding: '24px 20px 20px',
      alignItems: 'flex-start',
      background: '#fff',
    }}>

      {/* AVATAR */}
      <img
        src={user2}
        alt="profile"
        style={{
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{ flex: 1, paddingTop: '10px', textAlign: 'left' }}>

        {/* USERNAME ROW */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <span style={{ fontSize: '22px', fontWeight: '600', color: '#262626' }}>{username}</span>
          <span style={{ fontSize: '16px', color: '#262626' }}></span>
        </div>

        {/* NAME */}
        <div style={{ fontSize: '14px', color: '#262626', marginBottom: '8px' }}>
          {name}
        </div>

        {/* STATS — inline horizontal */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
          <span style={{ fontSize: '14px', color: '#262626' }}>
            <b>{postsCount}</b> posts
          </span>
          <span style={{ fontSize: '14px', color: '#262626' }}>
            <b>{followersCount}</b> followers
          </span>
          <span style={{ fontSize: '14px', color: '#262626' }}>
            <b>{followingCount}</b> following
          </span>
        </div>

        {/* BIO */}
        <div style={{ fontSize: '13px', color: '#262626', lineHeight: '1.5' }}>
          {bio}
        </div>

      </div>
    </div>
  );
}

export default ProfileInfo;