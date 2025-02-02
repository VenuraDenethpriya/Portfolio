import React from "react";

import styles from "./ProjectCard.module.css";


export const ProjectCard = () => {
    return (
        <>
            <div className={styles.container}>
                <img
                    src="./assests/lfrs.png"
                    alt=""
                    className={styles.image}
                />
                <h3 className={styles.title}>LFRS(Ongoing Project)</h3>
                <p className={styles.description}>Developing a MERN stack web system to enhance Sri Lankan police efficiency in managing lost item reports, featuring a user-friendly interface, APIs, business logic and a structured database to streamline management and improve communication.</p>
                <ul className={styles.skills}>
                    <li className={styles.skill}>
                        MERN
                    </li>
                    <li className={styles.skill}>
                        Tailwind
                    </li>
                    <li className={styles.skill}>
                        Redux
                    </li>
                    <li className={styles.skill}>
                        Clerk
                    </li>
                </ul>
                <div className={styles.links}>
                    <a href="https://lfrs-venura-denethpriyas-projects.vercel.app/" className={styles.link}>
                        Demo
                    </a>
                    <a href="https://github.com/VenuraDenethpriya/LFRS.git" className={styles.link}>
                        Source
                    </a>
                </div>
            </div>



                <div className={styles.container}>
                    <img
                        src="./assests/mebius.png"
                        alt=""
                        className={styles.image}
                    />
                    <h3 className={styles.title}>Mebius E-Commerce Site</h3>
                    <p className={styles.description}>Implement an e-commerce website using a streamlined user interface, RESTAPIs, 
                        a robust database, user authentication, and an integrated payment gateway to provide a seamless shopping 
                        experience.</p><br></br>
                    <ul className={styles.skills}>
                        <li className={styles.skill}>
                            MERN
                        </li>
                        <li className={styles.skill}>
                            Tailwind
                        </li>
                        <li className={styles.skill}>
                            Redux
                        </li>
                        <li className={styles.skill}>
                            Clerk
                        </li>
                    </ul>
                    <div className={styles.links}>
                        <a href="" className={styles.link}>
                            Demo
                        </a>
                        <a href="https://github.com/VenuraDenethpriya/E-commerce-site" className={styles.link}>
                            Source
                        </a>
                    </div>
                </div>

            <div className={styles.container}>
                <img
                    src="./assests/portfolio.png"
                    alt=""
                    className={styles.image}
                />
                <h3 className={styles.title}>Portfolio Site</h3>
                <p className={styles.description}>I developed a personal portfolio website with a clean user interface to showcase 
                    my background, education, projects, and provide options for contact and downloading a résumé, offering a seamless 
                    experience for potential employers interested in hiring me. </p><br></br>
                <ul className={styles.skills}>
                    <li className={styles.skill}>
                        React
                    </li>
                    <li className={styles.skill}>
                        CSS
                    </li>
                </ul>
                <div className={styles.links}>
                    <a href="https://venuraportfolio.vercel.app/" className={styles.link}>
                        Demo
                    </a>
                    <a href="https://github.com/VenuraDenethpriya/Portfolio" className={styles.link}>
                        Source
                    </a>
                </div>
            </div>


        </>

    );
}
