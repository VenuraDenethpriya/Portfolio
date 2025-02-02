import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="../../../assests/about/usjp-logo.jpg" alt="usjlogo" />
            <div className={styles.aboutItemText}>
              <h3>BSC - honors in Business Information Systems</h3>
              <p>
              I'm a 4<sup>th</sup> year undergraduate in the University of Sri Jayewardenepura.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="../../../assests/about/image.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Engineering for Developers</h3>
              <p>
                I succussfully completed Full-stack Engineering for Developers course at STEMLink.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};