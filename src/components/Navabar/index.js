import React, {useState} from 'react'
import {Link as LinkScroll} from 'react-scroll'
import {GoSearch} from 'react-icons/go'
import { FiSettings } from "react-icons/fi";
import {FaBars} from 'react-icons/fa'
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import "./style.scss"

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const NavScroll = () =>{
    if(window.scrollY > 0) {
      setIsScroll(true);
    } else{
      setIsScroll(false);
    }
  }

  const NavMobileIcon = () =>{
    setIsMobile(!isMobile)
  }

  document.addEventListener('scroll', NavScroll)


  return (
    <nav
      className={
        isScroll
          ? "active navbar navbar-expand-md bg-light navbar-light"
          : "navbar navbar-expand-md bg-light navbar-light"
      }
    >
      <div className="container">
        {/* Mobile Icon */}
        <div className="mobile__icon" onClick={NavMobileIcon}>
          {isMobile ? (
            <FaBars className="icon" />
          ) : (
            <AiOutlineClose className="icon" />
          )}
        </div>

        {/* LoGo */}
        <div className="logo">
          <h3>Furn</h3>
        </div>

        <div
          className={
            isMobile
              ? "collapse navbar-collapse justify-content-center"
              : "active collapse navbar-collapse justify-content-center"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <LinkScroll className="nav-link" to="/home">
                Home
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll className="nav-link" to="/new-arrival">
                New Arrival
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll className="nav-link" to="/features">
                Features
              </LinkScroll>
            </li>
            <li className="nav-item">
              <LinkScroll className="nav-link" to="/blog">
                Blog
              </LinkScroll>
            </li>
          </ul>
        </div>

        <div className="right-nav">
          <ul>
            <li className="search">
              <GoSearch className="search-icon nav-icon" />
            </li>
            <li className="nav-setting">
              <FiSettings className="setting-icon nav-icon" />
            </li>
            <li className="shoping-bag">
              <AiOutlineShoppingCart className="bag-icon nav-icon" />
              <p className="count">2</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
