import React, { useState } from "react";
import style from "./Contact.module.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        className={`${style.contactArea} ${style.section} ${style.paddingTop} ${style.paddingBottom}`}
      >
        <div className={style.container}>
          <div className={style.sectionTitle}>
            <h2>Contact ME</h2>
            <span>Contact ME</span>
          </div>
          <div className={style.row}>
            <div className={style.collg6}>
              <div className={style.contactWrapper}>
                <h4>Get In Touch</h4>
                <form
                  action="#"
                  className={`${style.form} ${style.contactForm}`}
                >
                  <div className={style.formField}>
                    <label>Enter your name*</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className={style.formField}>
                    <label>Enter your email*</label>
                    <input
                      type="text"
                      name="email"
                      id="contact-form-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className={style.formField}>
                    <label>Enter your subject*</label>
                    <input
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className={style.formField}>
                    <label>Enter your Message*</label>
                    <textarea
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className={style.formField}>
                    <button className={style.Button} disabled type="submit">
                      Send Mail
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={style.collg6}>
              <div className={style.contactInfo}>
                <div className={style.contactInfoBlock}>
                  <span className={style.contactInfoBlockIcon}>
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div className={style.ContactInfoBlockContent}>
                    <h6>Phone</h6>
                    <p>
                      <a href="+91 7708395882">+91-770-839-5882</a>
                    </p>
                  </div>
                </div>
                <div className={style.contactInfoBlock}>
                  <span className={style.contactInfoBlockIcon}>
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
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className={style.ContactInfoBlockContent}>
                    <h6>Email</h6>
                    <p>
                      <a href="mailto: ansaridurai@gmail.com">
                        ansaridurai@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className={style.contactInfoBlock}>
                  <span className={style.contactInfoBlockIcon}>
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div className={style.ContactInfoBlockContent}>
                    <h6>Address</h6>
                    <p>176, Anna Salai Puducherry - 605001, India </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
