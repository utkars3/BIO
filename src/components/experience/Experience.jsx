import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skill I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Bootstrap</h4>
              <small className="text-light">Experienced</small></div>
            </article>
           
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div> <h4>React</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
          </div>
        </div>


        {/* end of frontend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div> <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div> <h4>PHP</h4>
              <small className="text-light">Intermediate</small></div>
            </article> */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div>
             <h4>MySQL</h4>
              <small className="text-light">Basic</small>
             </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div>
             <h4>Python</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article> */}
           
          </div>
        </div>



        {/* end of backend */}
        {/* end of frontend */}
        <div className="experience__backend">
        <h3>Competitive Coding Profiles</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> <a href="https://www.codechef.com/users/utkars3" target="_blank">Codechef</a> </h4>
              {/* <a href="">Node JS</a> */}
              <small className="text-light">2★, 400+ ques</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
             <div> <h4> <a href="https://auth.geeksforgeeks.org/user/boss_1" target="_blank">Geeks For Geek</a> </h4>
              <small className="text-light">300+ ques</small></div>
            </article>
           
            
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
