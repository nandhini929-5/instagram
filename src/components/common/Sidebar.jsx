import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram, FaHome, FaSearch, FaRegCompass,
  FaFacebookMessenger, FaRegHeart, FaPlusSquare,
  FaBars, FaRegUserCircle, FaTimes,
} from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import "./Sidebar.css";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false); // 👈 add this
  const navigate = useNavigate();

  return (
    <>
      <div className={expanded ? "sidebar expanded" : "sidebar"}>
        <div>
          <div className="logo" onClick={() => setExpanded(!expanded)}>
            <FaInstagram />
            {expanded && <span>Instagram</span>}
          </div>

          <div className="sidebar-menu">
            <div className="sidebar-item" onClick={() => navigate("/")}>
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

            {/* 👇 Create — modal open */}
            <div className="sidebar-item" onClick={() => setShowModal(true)}>
              <FaPlusSquare />
              {expanded && <span>Create</span>}
            </div>

            <div className="sidebar-item" onClick={() => navigate("/profile")}>
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

      {/* 👇 CREATE POST MODAL */}
      {showModal && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)} // backdrop click — close
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '16px',
              width: '420px',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()} // modal click — don't close
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px',
              borderBottom: '1px solid #dbdbdb',
            }}>
              <span style={{ fontWeight: '600', fontSize: '16px' }}>Create new post</span>
              <FaTimes
                size={20}
                style={{ cursor: 'pointer' }}
                onClick={() => setShowModal(false)}
              />
            </div>

            {/* Body */}
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              padding: '60px 20px', gap: '16px', textAlign: 'center',
            }}>
              <BsImage size={80} strokeWidth={0.3} color="#262626" />
              <p style={{ fontSize: '20px', fontWeight: '300', color: '#262626', margin: 0 }}>
                Drag photos and videos here
              </p>
              <button style={{
                background: '#0095f6',
                color: 'white', border: 'none',
                borderRadius: '8px', padding: '9px 20px',
                fontWeight: '600', fontSize: '14px', cursor: 'pointer',
              }}>
                Select from computer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;