import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';
import './SettingsPage.css';

function SettingsPage({ onBack }) {
  const [isPrivate, setIsPrivate] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [dataUsage, setDataUsage] = useState(false)

  return (
    <div className="settings-page">

      {/* Header */}
      <div className="settings-header">
        <span className="settings-back" onClick={onBack}>←</span>
        <h2>Settings and activity</h2>
      </div>

      {/* Search */}
      <div className="settings-search">
        <FiSearch size={16} color="#8e8e8e" />
        <input type="text" placeholder="Search" className="settings-search-input" />
      </div>

      <div className="settings-content">

        {/* Your account */}
        <div className="settings-section-title">Your account</div>
        <div className="settings-item">
          <div className="settings-item-left">
            <span>Accounts Center</span>
            <span className="settings-item-sub">Password, security, personal details</span>
          </div>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>

        {/* How you use Instagram */}
        <div className="settings-section-title">How you use Instagram</div>
        <div className="settings-item">
          <span>Saved</span>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>
        <div className="settings-item">
          <span>Archive</span>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>

        {/* Notifications - Toggle */}
        <div className="settings-item">
          <span>Notifications</span>
          <div
            className={`toggle ${notifications ? 'on' : ''}`}
            onClick={() => setNotifications(!notifications)}
          >
            <div className="toggle-circle" />
          </div>
        </div>

        {/* Who can see */}
        <div className="settings-section-title">Who can see your content</div>

        {/* Account Privacy - Toggle */}
        <div className="settings-item">
          <div className="settings-item-left">
            <span>Account privacy</span>
            <span className="settings-item-sub">{isPrivate ? 'Private' : 'Public'}</span>
          </div>
          <div
            className={`toggle ${isPrivate ? 'on' : ''}`}
            onClick={() => setIsPrivate(!isPrivate)}
          >
            <div className="toggle-circle" />
          </div>
        </div>

        <div className="settings-item">
          <div className="settings-item-left">
            <span>Close Friends</span>
          </div>
          <div className="settings-item-right">
            <span className="settings-item-value">56</span>
            <FaChevronRight size={12} color="#8e8e8e" />
          </div>
        </div>

        <div className="settings-item">
          <div className="settings-item-left">
            <span>Blocked</span>
          </div>
          <div className="settings-item-right">
            <span className="settings-item-value">7</span>
            <FaChevronRight size={12} color="#8e8e8e" />
          </div>
        </div>

        {/* How others interact */}
        <div className="settings-section-title">How others can interact with you</div>
        <div className="settings-item">
          <span>Messages and story replies</span>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>
        <div className="settings-item">
          <span>Comments</span>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>

        {/* App and media */}
        <div className="settings-section-title">Your app and media</div>
        <div className="settings-item">
          <span>Language and translations</span>
          <FaChevronRight size={12} color="#8e8e8e" />
        </div>

        {/* Data usage - Toggle */}
        <div className="settings-item">
          <span>Data usage and media quality</span>
          <div
            className={`toggle ${dataUsage ? 'on' : ''}`}
            onClick={() => setDataUsage(!dataUsage)}
          >
            <div className="toggle-circle" />
          </div>
        </div>

        {/* Login */}
        <div className="settings-section-title">Login</div>
        <div className="settings-item">
          <span style={{ color: '#0095f6' }}>Add account</span>
        </div>
        <div className="settings-item">
          <span style={{ color: '#ed4956' }}>Log out</span>
        </div>

      </div>
    </div>
  )
}

export default SettingsPage;