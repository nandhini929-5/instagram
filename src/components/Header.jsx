import { FiPlusSquare } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import "./Header.css"
function Header() {
  return (
    <div className="header">

      <FiPlusSquare size={24} />

      <h2>Instagram</h2>

      <BsHeart size={22} />

    </div>
  )
}

export default Header