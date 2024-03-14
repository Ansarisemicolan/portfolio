import React from "react";
import style from "./Resume.module.css";

const Resume = () => {
  return (
    <div>
      <div
        className={`${style.skillArea} ${style.section} ${style.paddingTop}`}
      >
        <div className={style.container}>
          <div className={style.sectionTitle}>
            <h2>My Skills</h2>
            <span>My Skills</span>
          </div>
          <div className={style.skills}>
            <div className={`${style.row} ${style.mt30reverse}`}>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>HTML5</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>CSS</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>Javascript</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>Jquery</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>React JS</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.collg6} ${style.mt30}`}>
                <div className={style.progress}>
                  <h6 className={style.progressTitle}>C#</h6>
                  <div className={style.progressInner}>
                    <div className={style.progressPrecentage}>95%</div>
                    <div className={style.progressContainer}>
                      <span
                        className={style.progressActive}
                        style={{ width: "95%" }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${style.resumeArea} ${style.section} ${style.paddingTop} ${style.paddingBottom}`}
      >
        <div className={style.container}>
          <div className={style.sectionTitle}>
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          <div className={style.smallTitle}>
            <span className={style.smallTitleIcon}>
              <i className="lni lni-briefcase size-md"></i>
            </span>
            <h4>Working Experience</h4>
          </div>
          <div className={style.resumeWrapper}>
            <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2023 - Present</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>Full stack Web Developer</h5>
                <h6 className={style.resumeCompany}>DataTracks</h6>
                <p></p>
              </div>
            </div>
            <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2021 - 2023</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>Full Stack Web Developer</h5>
                <h6 className={style.resumeCompany}>Comhar 360</h6>
                <ul>
                  <li>
                    Proficient in developing dynamic and responsive web
                    applications using ASP.NET, ASP.NET Core, MVC.
                  </li>
                  <li>Proficient in developing API using ASP.NET web API.</li>
                  <li>
                    Proficient in writing queries, stored procedures, views etc.
                  </li>
                </ul>
                <b>Collaborative Team Player:</b> Working in collaborative
                environments, I have effectively communicated and collaborated
                with cross-functional teams.
                <br></br>
                <b>Continuous Learning:</b> I am committed to staying up-to-date
                with the latest developments in .NET and SQL Server
                technologies. Regularly participating in workshops, webinars,
                and online courses helps me integrate the latest best practices
                into my work.
              </div>
            </div>
            {/* <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2014 - 1016</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>UI/UX Designer</h5>
                <h6 className={style.resumeCompany}>Example Company</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quas, magni mollitia, aspernatur consequatur accusamus vero
                  eum facere exercitationem velit suscipit ipsam placeat libero.
                  Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                </p>
              </div>
            </div> */}
          </div>
          <div className={style.mt30}></div>
          <div className={style.smallTitle}>
            <span className={style.smallTitleIcon}>
              <i className="lni lni-briefcase size-md"></i>
            </span>
            <h4>Educational Qualifications</h4>
          </div>
          <div className={style.resumeWrapper}>
            <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2015-2019</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>Bachelor of Engineering (IT)</h5>
                <h6 className={style.resumeCompany}>
                  Rajiv Gandhi college of technology (affiliated to Pondicherry
                  University)
                </h6>
                <p>
                  Completed my Bachelor of Information Technology with score of
                  60%
                </p>
              </div>
            </div>
            <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2015</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>Higher Secondary School Level</h5>
                <h6 className={style.resumeCompany}>Computer science</h6>
                <p>Completed my HSC with score of 70%</p>
              </div>
            </div>
            <div className={`${style.resume} ${style.mt30}`}>
              <div className={style.resumeSummary}>
                <h6 className={style.resumeYear}>2013</h6>
              </div>
              <div className={style.resumeDetails}>
                <h5>Secondary School Level</h5>
                <h6 className={style.resumeCompany}>SSLC</h6>
                <p>Completed my SSLC with score of 80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
