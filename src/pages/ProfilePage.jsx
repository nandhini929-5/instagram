import { useState } from "react";
import "./ProfilePage.css";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileActions from "../components/profile/ProfileActions";
import ProfileTabs from "../components/profile/ProfileTabs";
import ProfileGrid from "../components/profile/ProfileGrid";
import user2 from "../assets/users/empty_dp.jpeg";

function ProfilePage() {
  const [name] = useState("user");
  const [username] = useState("Instagram");
  const [bio] = useState('bio');
  const [activeTab, setActiveTab] = useState('posts'); // 👈 add this

  return (
    <div className="profile-page">
      <ProfileInfo
        user2={user2}
        name={name}
        username={username}
        bio={bio}
        postsCount={0}
        followersCount={0}
        followingCount={0}
      />
      <ProfileActions />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} /> {/* 👈 pass here */}
      <ProfileGrid activeTab={activeTab} posts={[]} /> {/* 👈 pass here */}
    </div>
  );
}

export default ProfilePage;