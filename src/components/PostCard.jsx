import { useState } from "react"

import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa"

import { IoPaperPlaneOutline } from "react-icons/io5"

import "./PostCard.css"

function PostCard({ post }) {

  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [followed, setFollowed] = useState(false)
  function handleLike() {

    if (liked) {
      setLiked(false)
      setLikes(likes - 1)

    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  return (

    <div className="post-card">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user">

          <img
            src={post.avatar}
            alt=""
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
    •••
  </div>

</div>

      </div>

      {/* IMAGE */}

      <img
        src={post.postImage}
        alt=""
        className="post-image"
      />

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
          />

          <IoPaperPlaneOutline
            size={25}
            className="post-icon"
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

    </div>
  )
}

export default PostCard