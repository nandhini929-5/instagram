import Header from "../components/Header"
import StoriesRow from "../components/StoriesRow"
import PostCard from "../components/PostCard"
 

import user1 from "../assets/posts/post1.jpeg"
import user2 from "../assets/posts/post2.jpeg"
import user3 from "../assets/posts/post3.jpeg"
import user4 from "../assets/posts/post4.jpeg"
import user5 from "../assets/posts/post5.jpeg"
import user6 from "../assets/users/user9.jpeg"

const posts = [
  {
    id: 1,
    username: "priya_art",
    location: "Chennai, India",
    avatar: user1,
    postImage: user2,
    likes: 1248,
    caption: "Golden hour hits different ✨",
    time: "2 hours ago"
  },

  {
    id: 2,
    username: "dev_karan",
    location: "Bangalore, India",
    avatar: user2,
    postImage: user3,
    likes: 892,
    caption: "Shipped my React project 🚀",
    time: "5 hours ago"
  },

  {
    id: 3,
    username: "sara_clicks",
    location: "Mumbai, India",
    avatar: user3,
    postImage: user1,
    likes: 3421,
    caption: "Life is beautiful 🌸",
    time: "1 day ago"
  },

  {
    id: 4,
    username: "vicky.jpg",
    location: "Hyderabad, India",
    avatar: user1,
    postImage: user3,
    likes: 764,
    caption: "Night vibes 🌙",
    time: "3 hours ago"
  },

  {
    id: 5,
    username: "arun.editz",
    location: "Coimbatore, India",
    avatar: user2,
    postImage: user1,
    likes: 2210,
    caption: "Editing is therapy 🎬",
    time: "6 hours ago"
  },

  {
    id: 6,
    username: "keerthi.art",
    location: "Kerala, India",
    avatar: user3,
    postImage: user2,
    likes: 440,
    caption: "Coffee & calm ☕",
    time: "9 hours ago"
  },

  {
    id: 7,
    username: "rahul.codes",
    location: "Pune, India",
    avatar: user1,
    postImage: user3,
    likes: 1920,
    caption: "Late night coding 💻",
    time: "11 hours ago"
  },

  {
    id: 8,
    username: "megha.diary",
    location: "Delhi, India",
    avatar: user2,
    postImage: user1,
    likes: 999,
    caption: "Smiles everywhere 💫",
    time: "13 hours ago"
  },

  {
    id: 9,
    username: "ajay_visuals",
    location: "Chennai, India",
    avatar: user3,
    postImage: user2,
    likes: 5100,
    caption: "Frames tell stories 📸",
    time: "1 day ago"
  },

  {
    id: 10,
    username: "luna.sky",
    location: "Goa, India",
    avatar: user1,
    postImage: user3,
    likes: 786,
    caption: "Ocean therapy 🌊",
    time: "2 days ago"
  }
]

function Home() {
  return (
    <div className="app">

  <Header />

  <StoriesRow />

  <div className="feed-section">

    <div className="feed">

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>

  </div>
 

</div>
  )
}

export default Home