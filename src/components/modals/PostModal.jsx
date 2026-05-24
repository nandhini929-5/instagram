import React from 'react';
import { FaHeart, FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

function PostModal({
  post,
  username,
  user2,
  liked,
  toggleLike,
  setSelectedPost,
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: '#fff',
          width: '360px',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img
              src={user2}
              style={{ width: 32, height: 32, borderRadius: '50%' }}
            />
            <strong>{username}</strong>
          </div>

          <span onClick={() => setSelectedPost(null)} style={{ cursor: 'pointer' }}>
            ✕
          </span>
        </div>

        {/* IMAGE */}
        <img
          src={post.image}
          style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
        />

        {/* ACTIONS */}
        <div style={{ padding: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 14 }}>
              {liked[post.id] ? (
                <FaHeart
                  color="red"
                  onClick={() => toggleLike(post.id)}
                  cursor="pointer"
                />
              ) : (
                <FaRegHeart onClick={() => toggleLike(post.id)} cursor="pointer" />
              )}

              <FaRegComment />
              <IoPaperPlaneOutline />
            </div>

            <FaRegBookmark />
          </div>

          <p>
            {liked[post.id] ? post.likes + 1 : post.likes} likes
          </p>

          {post.comments.map((c, i) => (
            <p key={i}>
              <strong>{username}</strong> {c}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostModal;