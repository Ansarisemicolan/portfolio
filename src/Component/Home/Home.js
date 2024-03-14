import React from "react";
import style from "./Home.module.css";
import { motion } from "framer-motion";

const backGroundDesign = {
  width: "100% !important",
  height: "100% !important",
  position: "fixed !important",
  zIndex: "0 !important",
  top: "0px !important",
  left: "0px !important",
  pointerEvents: "none",
};

const Home = () => {
  return (
    <div className={style.homeArea}>
      <motion.div
        className={style.box}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={style.homeParticle} id="tsparticles">
          <canvas
            data-generated="false"
            style={backGroundDesign}
            width="1920"
            height="480"
          ></canvas>
        </div>
        <div className={style.container}>
          <div className={`${style.row} ${style.justifyContentCenter} `}>
            <div className={`${style.collg10} ${style.col12}`}>
              <div className={style.homecontent}>
                <h1>
                  Hi, I am{" "}
                  <span className={style.colortheme}>Ansari Durai</span>
                </h1>
                <p>
                  I am a Full Stack Developer. I can provide clean code and
                  perfect design. I also make website more &amp; more
                  interactive with web application.
                </p>
                <ul
                  className={`${style.socialicons} ${style.socialiconsBordered}`}
                >
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/ansari-durai-245130168/"
                    >
                      <i className="lni lni-linkedin size-md "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com"
                    >
                      <i className="lni lni-twitter size-md "></i>
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/Ansarisemicolan"
                    >
                      <i className="lni lni-github size-md "></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
