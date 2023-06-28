import React,{useState} from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg";
import Logo from "../img/Group.png"
import Close from "../img/Close_square_light (1).png"


const Navbar = () => {
 
    const [menuIcon, setMenuIcon] = useState();

  
  return (
    <>
      <div className="hearder">
        <div className="mainHeader">
          <NavLink to="/">
            <img src={Logo} alt="my logo img" className="logo" />
          </NavLink>
        </div>
        <div className={menuIcon ? "navbar active" : "navbar"}>
          <ul className="navbar-lists">
            <li>
              {" "}
              <NavLink to={"/"} className="navbar-link">
                Prices
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/products"} className="navbar-link">
                Learn
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="navbar-link">Products</NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="navbar-link">Help Center</NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="navbar-link">Community</NavLink>
            </li>
            <li>
              {" "}
              <NavLink className="navbar-link">
                <button className="btn-sign">Launch App </button>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/cart"} className="navbar-link ">
                {" "}
                <button className="btn-get btn-dis">Get started</button>
              </NavLink>
            </li>
          </ul>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn">
            <NavLink className="navbar-link navbar-link-respondive">
              {" "}
              <button className="btn-get btn-get-respondive">
                Get started
              </button>
            </NavLink>
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </div>
      <div className="add-section">
        <div className="add-section-center">
          <span className="add-section-data1">New</span>
          <span className="add-section-data2">
            TBC Stake Pool FOUR is live! Sign up to get loyalty rewards, upto
            40% discount on transaction fees, and more.
          </span>
        </div>
        <img src={Close} alt="close" />
      </div>
    </>
  );
}

export default Navbar