import React from "react";
import "./testimonials.css";
import ME from "../../assets/imageabt.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Register the Swiper modules
// Swiper.use([Pagination]);

const Testimonials = () => {
  // Add your data using an array of objects
  // const testimonials = [
  //   {
  //     avatar: ME,
  //     name: "Ernest Achieveer",
  //     review: "No clients yet",
  //   },
  //   // Add more testimonials as objects in this array
  // ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]} // Pass the imported Pagination module here
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ME} alt="Client" />
          </div>
          <h5 className="client__name">Ernest Achieveer</h5>
          <small className="client__review">No clients yet</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
