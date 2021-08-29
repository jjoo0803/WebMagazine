import React from 'react'; 
import './header.scss'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav () {
  return (
    <div className="nav-section">
      <div className="icon">
        <FaSearch className="search" size="17" />
        <GiHamburgerMenu size="22" />
      </div>
    </div>
  )
}

export default Nav