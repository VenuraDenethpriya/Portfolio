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
                            <img src="../../../assests/skills/html.png"
                            />
                        </div>
                        <p>HTML</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/jslogo.png"
                            />
                        </div>
                        <p>JavaScript</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/css.png"
                            />
                        </div>
                        <p>CSS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/react.png"
                            />
                        </div>
                        <p>ReactJS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/node.png"
                            />
                        </div>
                        <p>NodeJS</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/mongodb.png"
                            />
                        </div>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src="../../../assests/skills/express.png"
                            />
                        </div>
                        <p>ExpressJS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};