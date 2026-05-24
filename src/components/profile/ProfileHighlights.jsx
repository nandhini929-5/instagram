import React from 'react';

function ProfileHighlights({ highlights, setSelectedStory }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        padding: '0 16px',
        marginBottom: '16px',
        overflowX: 'auto',
      }}
    >
      {/* NEW STORY */}
      <div style={{ textAlign: 'center', minWidth: '60px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: '1px solid #ccc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}
        >
          +
        </div>
        <p style={{ fontSize: '11px', margin: '4px 0' }}>New</p>
      </div>

      {/* HIGHLIGHTS */}
      {highlights.map((h) => (
        <div
          key={h.id}
          style={{
            textAlign: 'center',
            minWidth: '60px',
            cursor: 'pointer',
          }}
          onClick={() => setSelectedStory(h)}
        >
          <img
            src={h.image}
            alt="highlight"
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ccc',
            }}
          />
          <p style={{ fontSize: '11px', margin: '4px 0' }}>
            {h.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProfileHighlights;