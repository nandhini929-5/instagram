import { useState, useEffect } from "react"
import { FaPlus, FaHeart, FaRegHeart } from "react-icons/fa"
import { IoPaperPlaneOutline } from "react-icons/io5"
import { BsThreeDots } from "react-icons/bs"

import "./StoriesRow.css"

import user1 from "../../assets/users/user1.jpeg"
import user2 from "../../assets/users/user2.jpeg"
import user3 from "../../assets/users/user3.jpeg"
import user4 from "../../assets/users/user4.jpeg"
import user5 from "../../assets/users/user5.jpeg"
import user6 from "../../assets/users/user6.jpeg"
import user7 from "../../assets/users/user7.jpeg"
import user8 from "../../assets/users/user8.jpeg"
import user9 from "../../assets/users/user9.jpeg"
import user10 from "../../assets/users/user10.jpeg"
 

const stories = [
  {
    id: 1,
    username: "Your Story",
    image: user1,
    isYours: true,
    stories: [user4]
  },

  {
    id: 2,
    username: "priya_art",
    image: user2,
    stories: [user5, user3, user4]
  },

  {
    id: 3,
    username: "ravi.pic",
    image: user3,
    stories: [user3, user2]
  },

  {
    id: 4,
    username: "Nithin_lv",
    image: user4,
    stories: [user1]
  },

  {
    id: 5,
    username: "Charu_art",
    image: user5,
    stories: [user2, user6, user4]
  },

  {
    id: 6,
    username: "Sneha.luna",
    image: user6,
    stories: [user3, user2]
  },

  {
    id: 7,
    username: "Sandy-12",
    image: user8,
    stories: [user5, user3, user4]
  },

  {
    id: 8,
    username: "Arizz_8",
    image: user9,
    stories: [user3, user2]
  },

  {
    id: 9,
    username: "Zayn ishann",
    image: user4,
    stories: [user1]
  },

  {
    id: 10,
    username: "venkat_",
    image: user2,
    stories: [user2, user6, user4]
  },

  {
    id: 11,
    username: "Sneha.luna",
    image: user6,
    stories: [user3, user2]
  },
]

function StoriesRow() {

  const [activeUserIndex, setActiveUserIndex] = useState(null)
  const [storyIndex, setStoryIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [liked, setLiked] = useState(false)

  const activeStoryUser =
    activeUserIndex !== null ? stories[activeUserIndex] : null

  const handleStoryClick = (index) => {

    if (stories[index].isYours) return

    setActiveUserIndex(index)
    setStoryIndex(0)
    setProgress(0)
  }

  // progress animation
  useEffect(() => {

    if (!activeStoryUser) return

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {

          nextStory()

          return 0
        }

        return prev + 2
      })

    }, 100)

    return () => clearInterval(interval)

  }, [activeStoryUser, storyIndex])

  // next story logic
  const nextStory = () => {

    if (!activeStoryUser) return

    // next story inside same user
    if (storyIndex < activeStoryUser.stories.length - 1) {

      setStoryIndex((prev) => prev + 1)
      setProgress(0)

    } else {

      // move to next user
      const nextUser = activeUserIndex + 1

      if (nextUser < stories.length) {

        setActiveUserIndex(nextUser)
        setStoryIndex(0)
        setProgress(0)

      } else {

        // restart from first
        setActiveUserIndex(1)
        setStoryIndex(0)
        setProgress(0)
      }
    }
  }

  // tap screen next
  const handleTap = (e) => {

    const screenWidth = window.innerWidth

    // left side tap
    if (e.clientX < screenWidth / 2) {

      if (storyIndex > 0) {

        setStoryIndex((prev) => prev - 1)
        setProgress(0)
      }

    } else {

      nextStory()
    }
  }

  return (
    <>
      {/* FULLSCREEN STORY */}

      {activeStoryUser && (

        <div className="story-fullscreen">

           <div className="story-container">
          {/* TOP PROGRESS BARS */}

          <div className="story-progress-wrapper">

            {activeStoryUser.stories.map((_, index) => (

              <div className="story-progress-bar" key={index}>

                <div
                  className="story-progress-fill"
                  style={{
                    width:
                      index < storyIndex
                        ? "100%"
                        : index === storyIndex
                        ? `${progress}%`
                        : "0%"
                  }}
                />

              </div>

            ))}

          </div>

          {/* TOP HEADER */}

          <div className="story-top">

            <div className="story-user-info">

              <img
                src={activeStoryUser.image}
                alt=""
                className="story-top-avatar"
              />

              <span>{activeStoryUser.username}</span>

            </div>

            <div className="story-top-right">

              <BsThreeDots size={22} />

              <span
                onClick={() => setActiveUserIndex(null)}
                className="story-close"
              >
                ✕
              </span>

            </div>

          </div>

          {/* STORY IMAGE */}

          <div className="story-image-container" onClick={handleTap}>

            <img
              src={activeStoryUser.stories[storyIndex]}
              alt=""
              className="story-fullscreen-img"
            />

          </div>

          {/* BOTTOM */}

          <div className="story-bottom">

            <input
              type="text"
              placeholder="Send message"
              className="story-message-input"
            />

            <div className="story-icons">

              {liked ? (
                <FaHeart
                  size={28}
                  color="red"
                  onClick={() => setLiked(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaRegHeart
                  size={28}
                  onClick={() => setLiked(true)}
                  style={{ cursor: "pointer" }}
                />
              )}

              <IoPaperPlaneOutline
                size={28}
                style={{ cursor: "pointer" }}
              />

            </div>

          </div>
          </div>

        </div>
      )}

      {/* STORIES ROW */}

      <div className="stories-row">

        {stories.map((story, index) => (

          <div
            className="story"
            key={story.id}
            onClick={() => handleStoryClick(index)}
          >

            <div className="story-ring">

              <img
                src={story.image}
                alt={story.username}
                className="story-avatar"
              />

              {story.isYours && (

                <div className="story-plus">

                  <FaPlus size={10} color="white" />

                </div>
              )}

            </div>

            <span className="story-name">

              {story.username}

            </span>

          </div>

        ))}

      </div>
    </>
  )
}

export default StoriesRow