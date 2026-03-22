import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title fade-in">Key Projects</h2>
            <div className="projects-grid fade-in-up">
                <div className="project-card">
                    <h3>HEALTH INSURANCE ETL PIPELINE</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>Databricks, AWS S3, Delta Lake, PySpark, SQL</p>
                    <ul className="project-list">
                        <li>Built an end-to-end ETL pipeline for the Health Insurance domain using Customer, Policy, Claims, Provider, and Encounters datasets, following the Medallion Architecture (Bronze, Silver, Gold) for scalable data processing.</li>
                        <li>Ingested raw data from AWS S3 into Databricks and performed data cleansing, complex transformations, and anomaly handling in the Silver layer using PySpark for improved data quality and consistency.</li>
                    </ul>
                </div>
                <div
                    className="project-card"
                    onClick={() => window.open("https://crick-box.vercel.app/", "_blank")}
                    style={{ cursor: 'pointer' }}
                >
                    <h3>CRICKBOX – Real-Time Cricket Scoring App</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>React, Context API, Tailwind CSS, Firebase (Firestore, Auth), Vercel</p>
                    <ul className="project-list">
                        <li>Designed and deployed a mobile-first cricket scoring web app using ReactJS and Firebase, enabling real-time match tracking with live scoreboard updates.</li>
                        <li>Implemented ball-by-ball tracking with undo functionality and Firebase Authentication, ensuring accurate scoring, secure access, and persistent match data storage.</li>
                    </ul>
                    <div className="project-links" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                        <a href="https://crick-box.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                            Live Demo →
                        </a>
                    </div>
                </div>
                <div className="project-card">
                    <h3>BLOOD CONNECT</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>ReactJS, NodeJS, ExpressJS, MySQL</p>
                    <ul className="project-list">
                        <li>Pioneered the development of a Web App, enhancing the way blood requesters connect with the donors by 90%.</li>
                        <li>Engineered a robust search functionality that improving search effectiveness by 75% to efficiently locate nearest blood donors by location and blood type filters.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;
