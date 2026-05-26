import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaThreads } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMessenger, SiX } from "react-icons/si";
import { IoClose, IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import "./ShareModal.css";

const suggestedUsers = [
  { id: 1, username: "acharya_prashant", avatar: "https://i.pravatar.cc/80?img=11", verified: true },
  { id: 2, username: "hanan_shaah", avatar: "https://i.pravatar.cc/80?img=33", verified: false },
  { id: 3, username: "dharmendra_b", avatar: "https://i.pravatar.cc/80?img=52", verified: true },
  { id: 4, username: "raj_shamani", avatar: "https://i.pravatar.cc/80?img=15", verified: true },
  { id: 5, username: "sneha_writes", avatar: "https://i.pravatar.cc/80?img=47", verified: false },
  { id: 6, username: "arjun_dev", avatar: "https://i.pravatar.cc/80?img=60", verified: false },
];

const shareOptions = [
  { id: "copy",      label: "Copy link",  icon: <IoCopyOutline size={22} /> },
  { id: "facebook",  label: "Facebook",   icon: <FaFacebook size={22} color="#1877F2" /> },
  { id: "messenger", label: "Messenger",  icon: <SiMessenger size={22} color="#0084FF" /> },
  { id: "whatsapp",  label: "WhatsApp",   icon: <FaWhatsapp size={22} color="#25D366" /> },
  { id: "email",     label: "Email",      icon: <MdEmail size={22} color="#EA4335" /> },
  { id: "threads",   label: "Threads",    icon: <FaThreads size={22} /> },
  { id: "x",         label: "X",          icon: <SiX size={20} /> },
];

function ShareModal({ onClose }) {
  const [search, setSearch] = useState("");
  const [sentTo, setSentTo] = useState({});
  const [copied, setCopied] = useState(false);

  const filtered = suggestedUsers.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  function handleSend(userId) {
    setSentTo((prev) => ({ ...prev, [userId]: true }));
  }

  function handleShareOption(id) {
    if (id === "copy") {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="share-overlay" onClick={onClose}>
      <div className="share-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="share-header">
          <button className="share-close-btn" onClick={onClose}>
            <IoClose size={24} />
          </button>
          <span className="share-title">Share</span>
          <div style={{ width: 24 }} />
        </div>

        {/* Search */}
        <div className="share-search-wrap">
          <input
            className="share-search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Suggested Users */}
        <div className="share-users-scroll">
          {filtered.map((user) => (
            <div key={user.id} className="share-user-item">
              <div className="share-user-avatar-wrap">
                <img src={user.avatar} alt={user.username} className="share-user-avatar" />
                {user.verified && <span className="share-verified">✓</span>}
              </div>
              <span className="share-user-name">{user.username}</span>
              <button
                className={`share-send-btn ${sentTo[user.id] ? "sent" : ""}`}
                onClick={() => handleSend(user.id)}
              >
                {sentTo[user.id] ? "Sent" : "Send"}
              </button>
            </div>
          ))}
        </div>

        <div className="share-divider" />

        {/* Share Options */}
        <div className="share-options-scroll">
          {shareOptions.map((opt) => (
            <div
              key={opt.id}
              className="share-option-item"
              onClick={() => handleShareOption(opt.id)}
            >
              <div className="share-option-icon">
                {opt.id === "copy" && copied ? (
                  <IoCheckmarkOutline size={22} color="#22c55e" />
                ) : (
                  opt.icon
                )}
              </div>
              <span className="share-option-label">
                {opt.id === "copy" && copied ? "Copied!" : opt.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShareModal;