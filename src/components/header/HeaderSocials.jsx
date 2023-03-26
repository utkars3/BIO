import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/utkars3/" target="_blank"> <BsLinkedin/> </a>
      <a href="https://github.com/utkars3" target="_blank"><FaGithub/></a>
      <a href="https://www.codechef.com/users/utkars3" target="_blank"><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials
