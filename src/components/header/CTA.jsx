import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
{/*       <a href={CV} download className='btn'>Download CV</a> */}
      <a href="https://drive.google.com/file/d/1nc26CLVLBzybXuE_kqNtfCuOrffKytth/view?usp=drive_link" download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA
