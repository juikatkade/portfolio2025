import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const YouTube = () => {
    return (
        <section id="youtube" className="section youtube-section">
            <h2 className="section-title fade-in">YouTube Channel</h2>
            <div className="youtube-content fade-in-up">
                <div className="yt-card">
                    <div className="yt-icon">▶</div>
                    <h3>
                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Tech Tutorials !', 'Placement Guide !', 'Interview Experiences !', 'Job  Alerts !', 'Internship Alerts!']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={20}
                                deleteSpeed={10}
                                delaySpeed={2000}
                            />
                        </span>
                    </h3>
                    <p>Building a community where we learn, solve problems, and grow together.</p>
                </div>
                <div className="yt-stats">
                    <div className="stat-item">
                        <span className="count">6K+</span>
                        <span className="label">Subscribers</span>
                    </div>
                    <div className="stat-item">
                        <span className="count">650k+ </span>
                        <span className="label">Views</span>
                    </div>
                </div>
                <div className="yt-buttons">
                    <a href="https://www.youtube.com/@Shauryaaa007?sub_confirmation=1" className="btn btn-youtube" target="_blank">Visit Channel</a>
                    <a href="https://shauryaa.vercel.app/" className="btn btn-youtube" target="_blank">Visit Website</a>
                </div>
            </div>
        </section>
    );
};

export default YouTube;

