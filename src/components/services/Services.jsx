import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Create website using HTML,CSS,Js.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Create using React framework</p>
        </li> 
        <li>
          <BiCheck className='service__list-icon'/>
          <p>MERN Developer</p>
        </li> 
        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> */}
        </ul>
      </article>

      {/* END of ui/u x */}

      {/* <article className='service'>
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> 
        </ul>
      </article> */}


      {/* END of web dev x */}


      {/* <article className='service'>
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service__list">
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> 
        </ul>
      </article> */}

      {/* END of  content creation x */}

      </div>
    </section>
  )
}

export default Services
