import React from 'react';
import { BsCamera, BsBookmark } from 'react-icons/bs';
function ProfileGrid({ posts,activeTab, setSelectedPost }) {
    if (activeTab === 'saved') {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        gap: '16px',
        textAlign: 'center',
      }}>
        <div style={{
          width: '80px', height: '80px',
          borderRadius: '50%',
          border: '2px solid #262626',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <BsBookmark size={36} />
        </div>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: '700' }}>Save</h2>
        <p style={{ margin: 0, fontSize: '14px', color: '#737373', maxWidth: '300px', lineHeight: '1.6' }}>
          Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.
        </p>
      </div>
    );
  }
  
  if (!posts || posts.length === 0) {
    return (
      <div style={{ padding: '16px 20px' }}>

        <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '14px', color: '#262626' }}>
          Getting Started
        </h4>

        <div style={{ display: 'flex', gap: '12px' }}>

          {/* Share Photos */}
          <div style={{
            flex: 1,
            border: '1px solid #dbdbdb',
            borderRadius: '12px',
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              border: '2px solid #262626',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BsCamera size={28} />
            </div>
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>Share Photos</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#737373', lineHeight: '1.5' }}>
              When you share photos, they will appear on your profile.
            </p>
            <button style={{
              background: '#385185',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '9px 20px',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              marginTop: '8px',
            }}>
              Share your first photo
            </button>
          </div>

          {/* Add Profile Photo */}
          <div style={{
            flex: 1,
            border: '1px solid #dbdbdb',
            borderRadius: '12px',
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'center',
          }}>
            <div style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              border: '2px solid #262626',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BsCamera size={28} />
            </div>
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>Add Profile Photo</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#737373', lineHeight: '1.5' }}>
              Add a profile photo so your friends know it's you.
            </p>
            <button style={{
              background: '#385185',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '9px 20px',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              marginTop: '8px',
            }}>
              Add profile photo
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Posts iruna — 3 column grid
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3px',
    }}>
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => setSelectedPost(post)}
          style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.querySelector('.overlay').style.opacity = 1}
          onMouseLeave={e => e.currentTarget.querySelector('.overlay').style.opacity = 0}
        >
          <img
            src={post.image}
            alt="post"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="overlay" style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px', opacity: 0, transition: 'opacity 0.2s',
            color: 'white', fontWeight: '600', fontSize: '15px',
          }}>
            <span>❤️ {post.likes}</span>
            <span>💬 {post.comments?.length || 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileGrid;