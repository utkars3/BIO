import React from 'react'
import './testimonials.css'
import ME from '../../assets/imageabt.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonials = () => {

  //do by javascript array metgod by making objects

  return (
    <section id='testimonials'>
     <h5>Review from clients</h5>
     <h2>Testimonials</h2>
     <Swiper className="container testimonials__container"  modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      
      
      >
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={ME} alt="" />
         
        </div>
        <h5 className='client__name'>Ernest Achieveer</h5>
          <small className='client__review'>No clients yet</small>
      </SwiperSlide>
      {/* <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={ME} alt="" />
         
        </div>
        <h5 className='client__name'>Ernest Achieveer</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero perferendis magnam vitae incidunt enim molestiae reprehenderit praesentium maiores dicta sunt distinctio, hic eius nostrum, excepturi iure adipisci ipsa explicabo.</small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={ME} alt="" />
         
        </div>
        <h5 className='client__name'>Ernest Achieveer</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero perferendis magnam vitae incidunt enim molestiae reprehenderit praesentium maiores dicta sunt distinctio, hic eius nostrum, excepturi iure adipisci ipsa explicabo.</small>
      </SwiperSlide> */}
     </Swiper>
    </section>
  )
}

export default Testimonials
