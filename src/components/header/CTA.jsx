import React from 'react'
import CV from '../../assets/Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href="https://drive.google.com/file/d/1to6h0QhsnaWTiMEsQgt8V5CAkYyolf5G/view?usp=drive_link" download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA
