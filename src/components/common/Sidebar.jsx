import { useState } from "react";

import {
  FaInstagram,
  FaHome,
  FaSearch,
  FaRegCompass,
  FaFacebookMessenger,
  FaRegHeart,
  FaPlusSquare,
  FaBars,
  FaRegUserCircle,
} from "react-icons/fa";

import { MdOutlineSlowMotionVideo } from "react-icons/md";

import "./Sidebar.css";

function Sidebar() {

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={expanded ? "sidebar expanded" : "sidebar"}>

      <div>

        <div
          className="logo"
          onClick={() => setExpanded(!expanded)}
        >
          <FaInstagram />

          {expanded && <span>Instagram</span>}
        </div>

        <div className="sidebar-menu">

          <div className="sidebar-item">
            <FaHome />
            {expanded && <span>Home</span>}
          </div>

          <div className="sidebar-item">
            <FaSearch />
            {expanded && <span>Search</span>}
          </div>

          <div className="sidebar-item">
            <FaRegCompass />
            {expanded && <span>Explore</span>}
          </div>

          <div className="sidebar-item">
            <MdOutlineSlowMotionVideo />
            {expanded && <span>Reels</span>}
          </div>

          <div className="sidebar-item">
            <FaFacebookMessenger />
            {expanded && <span>Messages</span>}
          </div>

          <div className="sidebar-item">
            <FaRegHeart />
            {expanded && <span>Notifications</span>}
          </div>

          <div className="sidebar-item">
            <FaPlusSquare />
            {expanded && <span>Create</span>}
          </div>

          <div className="sidebar-item">
            <FaRegUserCircle />
            {expanded && <span>Profile</span>}
          </div>

        </div>

      </div>

      <div className="more-section">
        <FaBars />
        {expanded && <span>More</span>}
      </div>

    </div>
  );
}

export default Sidebar;