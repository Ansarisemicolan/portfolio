import React from "react";
import style from "./About.module.css";
import aboutImg from "../../Assets/IMG-20231002-WA0018.jpg";

const About = () => {
  return (
    <div className={style.main}>
      <div
        className={`${style.aboutArea} ${style.section} ${style.paddingTop}`}
      >
        <div className={style.container}>
          <div className={style.sectionTitle}>
            <h2>About Me</h2>
            <span>About Me</span>
          </div>
          <div className={`${style.row} ${style.alignItemCenter}`}>
            <div className={style.colLg6}>
              <div className={style.aboutImage}>
                <img src={aboutImg} alt="aboutimage" />
                <span className={style.aboutImageIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </span>
              </div>
            </div>

            <div className={style.colLg6}>
              <div className={style.aboutContent}>
                <h3>
                  I am <span className={style.colorTheme}>AnsariDurai</span>
                </h3>
                <p>
                  I am a Full Stack Developer. I can provide clean code and
                  perfect design. I also make website more &amp; more
                  interactive with web application.
                </p>
                <ul>
                  <li>
                    <b>Full Name</b> Ansari Durai
                  </li>
                  <li>
                    <b>Age</b> 26 Years
                  </li>
                  <li>
                    <b>Nationality</b> INDIAN
                  </li>
                  <li>
                    <b>Languages</b> English, Tamil
                  </li>
                  <li>
                    <b>Address</b> 176, Anna Salai, Puducherrry
                  </li>
                  <li>
                    <b>Mail me </b>ansaridurai176@gmail.com to Collab
                  </li>
                </ul>
                <a className={style.Button} href="/files/empty.pdf">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style.serviceArea} ${style.section} ${style.paddingTop}`}
      >
        <div className={style.container}>
          <div className={style.sectionTitle}>
            <h2>Services</h2>
            <span>Services</span>
          </div>
          <div className={style.serviceWrapper}>
            <div className={`${style.row} ${style.mt30Reverse}`}>
              <div
                className={`${style.collg4} ${style.colmd6} ${style.col12} ${style.mt30}`}
              >
                <div className={style.service}>
                  <span className={style.serviceIcon}>
                    <i className={"lni lni-brush-alt size-md "}></i>
                  </span>
                  <h5>Web Design</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
              <div
                className={`${style.collg4} ${style.colmd6} ${style.col12} ${style.mt30}`}
              >
                <div className={style.service}>
                  <span className={style.serviceIcon}>
                    <i className={"lni lni-code size-md"}></i>
                  </span>
                  <h5>Web Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
              <div
                className={`${style.collg4} ${style.colmd6} ${style.col12} ${style.mt30}`}
              >
                <div className={style.service}>
                  <span className={style.serviceIcon}>
                    <i className={"lni lni-mobile size-md "}></i>
                  </span>
                  <h5>Mobile Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem tenetur ratione quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
