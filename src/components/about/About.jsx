import React from "react";
import "./about.css";
import ME from "../../assets/imageabt.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { CgAwards } from "react-icons/cg";
const About = () => {
  return (
    
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            {/* for clients */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Year</h5>
              <small>3 year student</small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className="about__card">
              <CgAwards className="about__icon" />
              <h5>CGPA</h5>
              <small>9.04</small>
            </article>
          </div>
          <p>
          I am Utkarsh Kesharwani currently studying at Jawaharlal Nehru University (NIRF-2) in engineering department.My branch is computer science & engineering.I am passionate about technology and love dsa.I have learned many skills and wants some industry expore now.Currently I am looking for internships and opensource projects.  
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
