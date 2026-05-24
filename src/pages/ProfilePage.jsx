import React, { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileActions from '../components/profile/ProfileActions';
import ProfileHighlights from '../components/profile/ProfileHighlights';
import ProfileTabs from '../components/profile/ProfileTabs';
import ProfileGrid from '../components/profile/ProfileGrid';
import EditProfileModal from '../components/modals/EditProfileModal';
import ShareProfileModal from '../components/modals/ShareProfileModal';
import StoryModal from '../components/modals/StoryModal';
import PostModal from '../components/modals/PostModal';
import SettingsPage from './SettingsPage'  // ← ADD

import user1 from '../assets/users/user1.jpeg';
import user2 from '../assets/users/user2.jpeg';
import user3 from '../assets/users/user3.jpeg';
import user4 from '../assets/users/user4.jpeg';
import user5 from '../assets/users/user5.jpeg';
import user6 from '../assets/users/user6.jpeg';
import post1 from '../assets/posts/post1.jpeg';
import post2 from '../assets/posts/post2.jpeg';

function ProfilePage() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [liked, setLiked] = useState({});
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showShareProfile, setShowShareProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false)  // ← ADD

  const [name, setName] = useState('Ajay♡');
  const [username, setUsername] = useState('_Ajey.dev_');
  const [bio, setBio] = useState('"Not antisocial -- just selective about my peace🌙"');

  const highlights = [
    { id: 1, image: user1, label: '😊' },
    { id: 2, image: user2, label: '♡_♡' },
    { id: 3, image: user3, label: '💗' },
    { id: 4, image: user4, label: '🌸' },
    { id: 5, image: user5, label: '💕' },
    { id: 6, image: user6, label: '😉' },
  ];

  const posts = [
    { id: 1, image: post1, likes: 124, comments: ['Nice pic!', 'Love this 💗'] },
    { id: 2, image: post2, likes: 89, comments: ['Beautiful!', 'Stunning 🌙'] },
  ];

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Settings page show pannanum na
  if (showSettings) {
    return <SettingsPage onBack={() => setShowSettings(false)} />
  }

  return (
    <div>
      <ProfileHeader username={username} onSettingsClick={() => setShowSettings(true)} />  {/* ← ADD onSettingsClick */}

      <ProfileInfo user2={user2} name={name} username={username} bio={bio} />
      <ProfileActions setShowEditProfile={setShowEditProfile} setShowShareProfile={setShowShareProfile} />
      <ProfileHighlights highlights={highlights} setSelectedStory={setSelectedStory} />
      <ProfileTabs />
      <ProfileGrid posts={posts} setSelectedPost={setSelectedPost} />

      {showEditProfile && (
        <EditProfileModal name={name} setName={setName} username={username} setUsername={setUsername} bio={bio} setBio={setBio} setShowEditProfile={setShowEditProfile} user2={user2} />
      )}
      {showShareProfile && (
        <ShareProfileModal username={username} setShowShareProfile={setShowShareProfile} />
      )}
      {selectedStory && (
        <StoryModal story={selectedStory} setSelectedStory={setSelectedStory} />
      )}
      {selectedPost && (
        <PostModal post={selectedPost} username={username} user2={user2} liked={liked} toggleLike={toggleLike} setSelectedPost={setSelectedPost} />
      )}
    </div>
  );
}

export default ProfilePage;