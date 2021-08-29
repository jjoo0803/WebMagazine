import React from 'react';
import './header.scss'
import logo from '../../image/logo.png'

function HeaderTitle () {
  return (
    <div className="header-title">
      <img src={logo} alt="logo"/>
    </div>
  )
}

export default HeaderTitle