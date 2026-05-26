import { useState } from "react";
import CommentModal from "./CommentModal.jsx";
import ShareModal from "./ShareModal.jsx";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

import { IoPaperPlaneOutline } from "react-icons/io5";

import "./PostCard.css";

function PostCard({ post }) {

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const [likes, setLikes] = useState(post.likes || 0);

  const [followed, setFollowed] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
  {
    id: 1,
    user: "priya_art",
    text: "Nice post 🔥",
    time: "2m",
    likes: 2,
  },
  {
    id: 2,
    user: "john_doe",
    text: "Amazing work!",
    time: "10m",
    likes: 0,
  },
]);
const [showShare, setShowShare] = useState(false);
  function handleLike() {

    if (liked) {

      setLiked(false);

      setLikes(likes - 1);

    } else {

      setLiked(true);

      setLikes(likes + 1);
    }
  }

  return (

    <div className="post-card">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user">

          <img
            src={post.avatar}
            alt={post.username}
            className="post-avatar"
          />

          <div className="post-user-details">

            <div className="post-username">
              {post.username}
            </div>

            <div className="post-location">
              {post.location}
            </div>

          </div>

        </div>

        <div className="post-header-right">

          <button
            className={`follow-btn ${followed ? "following" : ""}`}
            onClick={() => setFollowed(!followed)}
          >
            {followed ? "Following" : "Follow"}
          </button>

          <div className="post-more">

            <button
              className="more-btn"
              onClick={() => setShowMenu(!showMenu)}
            >
              •••
            </button>

            {showMenu && (

              <div className="post-menu">

                <p>Unfollow</p>

                <p>Report</p>

                <p>Add to Favorites</p>

                <p>Cancel</p>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* MEDIA */}

      {post.mediaType === "video" ? (

        <video
          controls
          className="post-image"
        >
          <source
            src={post.postVideo}
            type="video/mp4"
          />
        </video>

      ) : (

        <img
          src={post.postImage}
          alt=""
          className="post-image"
        />

      )}

      {/* ACTIONS */}

      <div className="post-actions">

        <div className="post-actions-left">

          {liked ? (

            <FaHeart
              size={26}
              color="red"
              className="post-icon"
              onClick={handleLike}
            />

          ) : (

            <FaRegHeart
              size={26}
              className="post-icon"
              onClick={handleLike}
            />

          )}

         <FaRegComment
  size={24}
  className="post-icon"
  onClick={() => setShowComments(true)}
/>
          <IoPaperPlaneOutline
  size={25}
  className="post-icon"
  onClick={() => setShowShare(true)}   // 👈 add this
/>

        </div>

        {saved ? (

          <FaBookmark
            size={22}
            className="post-icon"
            onClick={() => setSaved(false)}
          />

        ) : (

          <FaRegBookmark
            size={22}
            className="post-icon"
            onClick={() => setSaved(true)}
          />

        )}

      </div>

      {/* CONTENT */}

      <div className="post-content">
       
        <div className="post-likes">
          {likes.toLocaleString()} likes
        </div>

        <div className="post-caption">
          <b>{post.username}</b> {post.caption}
        </div>

        <div className="post-time">
          {post.time}
        </div>

          

      </div>
{showComments && (
  <CommentModal
    post={post}
    comments={comments}
    setComments={setComments}
    onClose={() => setShowComments(false)}
  />
)}

{showShare && (
  <ShareModal onClose={() => setShowShare(false)} />
)}
    </div>
  );
}

export default PostCard;