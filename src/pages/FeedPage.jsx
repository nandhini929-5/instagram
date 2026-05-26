import Sidebar from "../components/common/Sidebar";
import StoriesRow from "../components/stories/StoriesRow";
import PostCard from "../components/feed/PostCard";

import posts from "../data/posts";

function FeedPage() {

  return (

    <div className="feed-layout">

      <Sidebar />

      <div className="feed-container">

        <StoriesRow />

        {posts.map((post) => (

          <PostCard
            key={post.id}
            post={post}
          />

        ))}

      </div>

    </div>
  );
}

export default FeedPage;