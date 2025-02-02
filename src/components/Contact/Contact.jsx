import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="./assests/emailIcon.png" alt="Email icon" />
          <a href="mailto:venurameedum@email.com">venurameedum@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="./assests/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/venuradenethpriya">linkedin.com/venuradenethpriya</a>
        </li>
        <li className={styles.link}>
          <img src="./assests/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/VenuraDenethpriya">github.com/VenuraDenethpriya</a>
        </li>
      </ul>
    </footer>
  );
};