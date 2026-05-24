import React from 'react';

function ProfileGrid({ posts, setSelectedPost }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '10px',
        padding: '0 10px 20px',
        background: '#fff',
      }}
    >
      {posts.map((post) => (
        <img
          key={post.id}
          src={post.image}
          alt="post"
          onClick={() => setSelectedPost(post)}
          style={{
            width: '100%',
            aspectRatio: '1',
            objectFit: 'cover',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  );
}

export default ProfileGrid;