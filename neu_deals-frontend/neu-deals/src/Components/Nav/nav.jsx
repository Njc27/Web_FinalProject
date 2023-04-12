import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './nav.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import SideBar from "../SideBar/SideBar"
import Signup from "../SignUp/Signup"

export default function Nav() {
  return (
    <nav className="nav">

      <Link to="/" className="site-title">
        NEU DEALS
      </Link>
      <ul>
        <CustomLink to="/Signup"><AiOutlineShoppingCart className="cart_icon"/></CustomLink>
        <CustomLink to="/login"><button className="sell">Sell</button></CustomLink>
        {/* <CustomLink to="/signup">SIGN UP</CustomLink> */}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}