import React from 'react';

function StoryModal({ story, setSelectedStory }) {
  return (
    <div
      onClick={() => setSelectedStory(null)}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <img
        src={story.image}
        alt="story"
        style={{
          width: '360px',
          height: '640px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
    </div>
  );
}

export default StoryModal;