import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./CommentModal.css";

function CommentModal({ post, comments, setComments, onClose }) {
  const [text, setText] = useState("");
  const [likedComments, setLikedComments] = useState({});

  function handleSend() {
    if (text.trim() === "") return;
    const newComment = {
      id: Date.now(),
      user: "you",
      text: text.trim(),
      time: "now",
      likes: 0,
    };
    setComments([...comments, newComment]);
    setText("");
  }

  function toggleLike(id) {
    setLikedComments((prev) => ({ ...prev, [id]: !prev[id] }));
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, likes: likedComments[id] ? c.likes - 1 : c.likes + 1 }
          : c
      )
    );
  }

  return (
    <div className="cm-overlay" onClick={onClose}>
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>

        {/* LEFT — post image */}
        <div className="cm-image-side">
          {post?.mediaType === "video" ? (
            <video className="cm-media" controls>
              <source src={post.postVideo} type="video/mp4" />
            </video>
          ) : (
            <img className="cm-media" src={post?.postImage} alt="" />
          )}
        </div>

        {/* RIGHT — comments */}
        <div className="cm-right-side">

          {/* Header */}
          <div className="cm-header">
            <div className="cm-header-user">
              <img
                src={post?.avatar || "https://i.pravatar.cc/40"}
                className="cm-header-avatar"
                alt=""
              />
              <div>
                <span className="cm-header-username">{post?.username}</span>
                {post?.verified && <span className="cm-verified">✓</span>}
              </div>
            </div>
            <button className="cm-more-btn">•••</button>
          </div>

          {/* Caption as first comment */}
          {post?.caption && (
            <div className="cm-caption-row">
              <img
                src={post?.avatar || "https://i.pravatar.cc/40"}
                className="cm-item-avatar"
                alt=""
              />
              <div className="cm-item-content">
                <p className="cm-item-text">
                  <b>{post?.username}</b> {post?.caption}
                </p>
                <span className="cm-item-time">{post?.time}</span>
              </div>
            </div>
          )}

          {/* Comments list */}
          <div className="cm-list">
            {comments.length === 0 ? (
              <p className="cm-empty">No comments yet. Be the first!</p>
            ) : (
              comments.map((c) => (
                <div key={c.id} className="cm-item">
                  <img
                    src={c.avatar || `https://i.pravatar.cc/40?u=${c.user}`}
                    className="cm-item-avatar"
                    alt=""
                  />
                  <div className="cm-item-content">
                    <p className="cm-item-text">
                      <b>{c.user}</b> {c.text}
                    </p>
                    <div className="cm-item-meta">
                      <span className="cm-item-time">{c.time}</span>
                      {c.likes > 0 && (
                        <span>{c.likes} like{c.likes !== 1 ? "s" : ""}</span>
                      )}
                      <span className="cm-reply-btn">Reply</span>
                    </div>
                  </div>
                  <button
                    className="cm-like-btn"
                    onClick={() => toggleLike(c.id)}
                  >
                    {likedComments[c.id] ? (
                      <FaHeart size={12} color="red" />
                    ) : (
                      <FaRegHeart size={12} color="#8e8e8e" />
                    )}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Actions bar */}
          <div className="cm-actions">
            <div className="cm-actions-left">
              <FaRegHeart size={24} className="cm-action-icon" />
              <IoPaperPlaneOutline size={24} className="cm-action-icon" />
            </div>
            <div className="cm-likes-count">
              {(post?.likes || 0).toLocaleString()} likes
            </div>
            <span className="cm-post-time">{post?.time}</span>
          </div>

          {/* Input */}
          <div className="cm-input-row">
            <BsEmojiSmile size={24} className="cm-emoji-icon" />
            <input
              className="cm-input"
              placeholder="Add a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            {text.trim() && (
              <button className="cm-post-btn" onClick={handleSend}>
                Post
              </button>
            )}
          </div>

        </div>

        {/* Close button outside modal */}
        <button className="cm-close-btn" onClick={onClose}>
          <IoClose size={28} color="white" />
        </button>

      </div>
    </div>
  );
}

export default CommentModal;