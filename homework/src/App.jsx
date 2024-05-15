import React, { useState } from "react";
import people from "./assets/Ellipse 1.svg";
import trad from "./assets/Rectangle 30.svg";
import girl from "./assets/Rectangle 32.svg";
import wallpaper from "./assets/Rectangle 34.svg";
function App() {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>works</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="burger">
            <i class="fa-solid fa-bars"></i>
          </div>
        </nav>

        <header className="container">
          <div className="header-iteem">
            <div className="header-box">
              <h1>Hi, I am John, Creative Technologist</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button>Download Resume</button>
            </div>
            <div className="box">
              <img src={people} alt="" />
            </div>
          </div>
        </header>
      </div>

      {/*  */}
      <div className="wrapper container">
        <h4>Recent posts</h4>
        <div className="wrapper-box">
          <div className="wrapper-item">
            <h2>Making a design system from scratch</h2>
            <span>12 Feb 2020 | Design, Pattern</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="wrapper-item">
            <h2>Creating pixel perfect icons in Figma</h2>
            <span>12 Feb 2020 | Figma, Icon Design</span>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>

      {/*  */}
      <main className="container">
        <h4>works</h4>
        <div className="main-body">
          <div className="main-img">
            <img src={trad} />
          </div>
          <div className="main-item">
            <h2>Designing Dashboards</h2>
            <div className="main-box">
              <span>2020</span>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr />

        {/*  */}
        <div className="main-body">
          <div className="main-img">
            <img src={girl} />
          </div>
          <div className="main-item">
            <h2>Vibrant Portraits of 2020</h2>
            <div className="main-box">
              <span>2018</span>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <hr />

        {/*  */}
        <div className="main-body">
          <div className="main img">
            <img src={wallpaper} />
          </div>
          <div className="main-item">
            <h2>36 Days of Malayalam type</h2>
            <div className="main-box">
              <span>2018</span>
              <p>Dashboard</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </main>
      {/*  */}

      <footer className="container">
        <div className="musa">
          <span>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-envelope"></i>
          </span>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </footer>
    </>
  );
}

export default App;
