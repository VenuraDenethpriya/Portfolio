import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> I'm Venura</h1>
                <p className={styles.description}>
                    Motivated undergraduate seeking internship opportunities in full-stack development. 
                    Passionate about coding, problem solving, and learning. My goal is to become a software engineer, 
                    driving innovation and impactful solutions in the tech industry within five years.
                </p>
                <a href="/cv/VenuraCV.pdf" className={styles.contactBtn} download="VenuraCV.pdf">
                    Download CV
                </a>
            </div>
            <img
                src="./assests/IMG_9451.jpg"
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
