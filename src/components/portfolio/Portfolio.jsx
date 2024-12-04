import React from "react";
import "./portfolio.css";
import News from "../../assets/newspic.png";
import Todolist from "../../assets/todolistpic.png";
import Calculator from "../../assets/calculatorpic.png";
import Textutil from "../../assets/textutil.png";
import Clock from "../../assets/clock.png";
import Icoder from "../../assets/icoder.png";
import Tictactoe from "../../assets/tictactoe.png";
import Inotebook from "../../assets/inotebook.png";



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {/* Newsapp */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={News} alt="" />
          </div>
          <h3>Newsapp</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/Newsapp" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

        {/* Todolist */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Todolist} alt="" />
          </div>
          <h3>To Do List</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/Todolist" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

          {/* calculator */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Calculator} alt="" />
          </div>
          <h3>Calculator</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/Calculator" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

          {/* Textutils */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Textutil} alt="" />
          </div>
          <h3>Textutil</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/Textutils" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

        {/* Clock */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Clock} alt="" />
          </div>
          <h3>Clock</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/Clock" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

          {/* icoder */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Icoder} alt="" />
          </div>
          <h3>iCoder</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/iCoder-bootstrap" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

          {/* Tictactoe */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Tictactoe} alt="" />
          </div>
          <h3>Tic Tac Toe</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/tic-tac-toe" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

        {/* inotebook */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Inotebook} alt="" />
          </div>
          <h3>iNotebook</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/utkars3/inotebook" className="btn" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* <a
            href="https://github.com"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a> */}
         </div>
        </article>

       
      </div>
    </section>
  );
};

export default Portfolio;
