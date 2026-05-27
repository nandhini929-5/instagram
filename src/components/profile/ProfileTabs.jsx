import React from 'react';
import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from 'react-icons/bs';

function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'posts',  icon: <BsGrid3X3 size={22} /> },
    { id: 'saved',  icon: <BsBookmark size={22} /> },
    
  ];

  return (
    <div style={{
      display: 'flex',
      borderTop: '1px solid #dbdbdb',
      background: '#fff',
      marginBottom: '2px',
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            padding: '14px',
            cursor: 'pointer',
            color: activeTab === tab.id ? '#262626' : '#8e8e8e',
            borderTop: activeTab === tab.id ? '2px solid #262626' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {tab.icon}
        </button>
      ))}
    </div>
  );
}

export default ProfileTabs;