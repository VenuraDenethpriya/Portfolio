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
                <a href="/cv/IS Research Project Proposal.pdf" className={styles.contactBtn} download="IS Research Project Proposal.pdf">
                    Download CV
                </a>
            </div>
            <img
                src="../../../assests/hero/IMG_9451.jpg"
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};