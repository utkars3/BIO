import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/preview1.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h2>Utkarsh Kesharwani</h2>
      <h5 className='text-light'>Engineer</h5> 
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
