import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <h2 className="section-title fade-in">Key Projects</h2>
            <div className="projects-grid fade-in-up">
                <div className="project-card">
                    <h3>AI-Powered SMS Spam Detection System</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>Python, Scikit-learn, NLP, TF-IDF, Machine Learning</p>
                    <ul className="project-list">
                        <li>Designed and developed a scalable spam detection model capable of classifying real-time SMS inputs with high precision and efficiency.</li>
                        <li>Engineered a complete NLP pipeline using TF-IDF and Multinomial Naive Bayes for accurate text classification and optimized performance.</li>
                        <li>Built a production-ready machine learning workflow including preprocessing, model training, evaluation, and deployment using serialized models for fast inference.</li>
                    </ul>
                    <a href="https://github.com/juikatkade/sms-spam-detector" target="_blank" rel="noopener noreferrer" className="github-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
                </div>
                <div className="project-card">
                    <h3>AWS-Based Smart Car Data Processing System</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem' }}>AWS (S3, Lambda, EC2), Python, IoT, Cloud Architecture</p>
                    <ul className="project-list">
                        <li>Developed a cloud-native connected car platform leveraging AWS to process and analyze streaming vehicle data in real-time, demonstrating scalability and automation.</li>
                        <li>Engineered a robust serverless data pipeline using Lambda and S3 for efficient ingestion, processing, and storage of high-volume sensor data.</li>
                        <li>Implemented event-driven workflows to enable intelligent monitoring and analytics of vehicle performance, enhancing reliability and system efficiency.</li>
                    </ul>
                    <a href="https://github.com/juikatkade/Car-aws" target="_blank" rel="noopener noreferrer" className="github-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        View on GitHub
                    </a>
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
