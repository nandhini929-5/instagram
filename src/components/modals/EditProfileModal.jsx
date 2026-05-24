import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

function EditProfileModal({
  name, setName,
  username, setUsername,
  bio, setBio,
  setShowEditProfile,
  user2,
}) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#fff',
      zIndex: 999,
      overflowY: 'auto',
    }}>

      {/* HEADER */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
        borderBottom: '1px solid #eee',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span onClick={() => setShowEditProfile(false)}
            style={{ fontSize: '20px', cursor: 'pointer' }}>←</span>
          <strong>Edit profile</strong>
        </div>
        <span
          onClick={() => setShowEditProfile(false)}
          style={{ color: '#0095f6', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}
        >
          Done
        </span>
      </div>

      {/* PROFILE IMAGE */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={user2} alt="profile"
          style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
        <p style={{ color: '#0095f6', fontWeight: 'bold', marginTop: '8px', fontSize: '14px' }}>
          Edit picture or avatar
        </p>
      </div>

      {/* FIELDS */}
      <div style={{ padding: '0 16px', textAlign: 'left' }}>

        {/* Name */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Name" style={inputStyle} />
        </div>

        {/* Username */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" style={inputStyle} />
        </div>

        {/* Pronouns */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Pronouns</label>
          <input placeholder="Add pronouns" style={inputStyle} />
        </div>

        {/* Bio */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Bio</label>
          <textarea value={bio} onChange={(e) => setBio(e.target.value)}
            placeholder="Bio" rows={3}
            style={{ ...inputStyle, resize: 'none' }} />
        </div>

        {/* Interests */}
        <div style={rowItem}>
          <strong style={{ fontSize: '14px' }}>Interests</strong>
          <FaChevronRight size={14} color="#8e8e8e" />
        </div>

        {/* Add link */}
        <div style={rowItem}>
          <strong style={{ fontSize: '14px' }}>Add link</strong>
        </div>

        {/* Banners */}
        <div style={rowItem}>
          <div>
            <strong style={{ fontSize: '14px' }}>Banners</strong>
            <p style={{ margin: 0, fontSize: '12px', color: '#8e8e8e' }}>Add music, profiles and more.</p>
          </div>
          <span style={{ color: '#8e8e8e', fontSize: '14px' }}>1</span>
        </div>

        {/* Gender */}
        <div style={fieldWrap}>
          <label style={labelStyle}>Gender</label>
          <select style={{ ...inputStyle, color: '#262626' }}>
            <option>Prefer not to say</option>
            <option>Male</option>
            <option>Female</option>
            
          </select>
        </div>

        {/* Blue links */}
        <div style={{ marginTop: '8px' }}>
          <p style={blueLink}>Switch to professional account</p>
          <p style={blueLink}>Personal information settings</p>
          <p style={blueLink}>Show that your profile is verified</p>
        </div>

      </div>
    </div>
  );
}

const fieldWrap = {
  marginBottom: '12px',
}

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  color: '#8e8e8e',
  marginBottom: '4px',
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  outline: 'none',
  fontSize: '14px',
  boxSizing: 'border-box',
}

const rowItem = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 0',
  borderBottom: '1px solid #efefef',
  cursor: 'pointer',
}

const blueLink = {
  color: '#0095f6',
  fontSize: '14px',
  fontWeight: '600',
  padding: '14px 0',
  borderBottom: '1px solid #efefef',
  cursor: 'pointer',
  margin: 0,
}

export default EditProfileModal;