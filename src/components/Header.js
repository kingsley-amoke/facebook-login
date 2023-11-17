import React from 'react'
import './index.css'

const Header = ({logo}) => {
  return (
    <header>
      <img src={logo} alt='facebook' className='fb-logo'/>
      <h2 className='header-text'>
      Facebook helps you connect and share with the people in your life.
      </h2>
    </header>
  )
}

export default Header
