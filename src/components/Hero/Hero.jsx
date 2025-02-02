import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> I'm Venura</h1>
                <p className={styles.description}>
                    I am a fourth-year undergraduate seeking an internship to gain experience and grow professionally.
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