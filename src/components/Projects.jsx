import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title fade-in">Key Projects</h2>
            <div className="projects-grid fade-in-up">
                <div className="project-card">
                    <h3>New York City Taxi Data Analysis</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>Delta Lake | Delta Table | Spark (Core, SQL) | Pyspark</p>
                    <ul className="project-list">
                        <li>Built a case study project titled ‘New York City Taxi Analysis’ using the Databricks Lakehouse Platform to process and analyze taxi trip data.</li>
                        <li>Ingested large-scale datasets from Yellow and Green utilizing Auto Loader and processing them through a Multi Hop (Medallion) Architecture comprising Bronze, Silver, and Gold layers.</li>
                    </ul>
                    <a href="https://github.com/juikatkade/sms-spam-detector" target="_blank" rel="noopener noreferrer" className="github-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>
                <div className="project-card">
                    <h3>BOOK BROWSE</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>React, Context-API, React-Bootstrap, Firebase, Vercel</p>
                    <ul className="project-list">
                        <li>Designed and deployed a fully fledged online book marketplace using ReactJS and Firebase, enabling users to buy and sell books with ease streamlining user workflow by 90%.</li>
                        <li>Implemented user authentication using Firebase Authentication, ensuring secure access to the platform. Users can register and log in.</li>
                    </ul>
                </div>
                <div className="project-card">
                    <h3>Plagiarism Detection System (TF-IDF + SBERT)</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>ReactJS, NodeJS, ExpressJS, MySQL</p>
                    <ul className="project-list">
                        <li>Designed a hybrid plagiarism detection system combining TF-IDF and SBERT to accurately detect both lexical overlap and semantic paraphrasing in text and code.</li>
                        <li>Engineered a scalable comparison pipeline supporting bulk file analysis with cosine similarity and transformer embeddings for improved detection performance.</li>
                        <li>Developed a user-friendly GUI and automated reporting system, enabling efficient plagiarism analysis and export of detailed results in CSV format.</li>
                    </ul>
                    <a href="https://github.com/juikatkade/plag-detection" target="_blank" rel="noopener noreferrer" className="github-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
