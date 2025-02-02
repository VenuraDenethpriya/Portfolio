import React from "react";

import styles from "./Experience.module.css";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Skils</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/html.png"
                            />
                        </div>
                        <p>HTML</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/jslogo.png"
                            />
                        </div>
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/css.png"
                            />
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/react.png"
                            />
                        </div>
                        <p>ReactJS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/node.png"
                            />
                        </div>
                        <p>NodeJS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/mongodb.png"
                            />
                        </div>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="./assests/express.png"
                            />
                        </div>
                        <p>ExpressJS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};