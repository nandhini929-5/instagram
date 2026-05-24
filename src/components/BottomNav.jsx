import { Link, useLocation } from "react-router-dom"

import { GoHomeFill } from "react-icons/go"
import { FiSearch } from "react-icons/fi"
import { MdOutlineOndemandVideo } from "react-icons/md"
import { FiSend } from "react-icons/fi"
import { FaRegUserCircle } from "react-icons/fa"

import "./BottomNav.css"

function BottomNav() {

  const location = useLocation()

  return (

    <div className="bottom-nav">

      <Link to="/">
        <GoHomeFill
          className={location.pathname === "/" ? "active-icon" : ""}
        />
      </Link>

      <Link to="/search">
        <FiSearch />
      </Link>

      <Link to="/reels">
        <MdOutlineOndemandVideo />
      </Link>

      <Link to="/messages">
        <FiSend />
      </Link>

      <Link to="/profile">
        <FaRegUserCircle
          className={location.pathname === "/profile" ? "active-icon" : ""}
        />
      </Link>

    </div>
  )
}

export default BottomNav