import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <h2 className="section-title fade-in">Achievements</h2>
            <div className="achievements-list fade-in-up">

                <div className="achievement-item">
                    <span>🏆 <strong>Publicity Head, ITSA (2026):</strong> Led publicity and managed social media campaigns for technical events, increasing engagement and participation across the student community.</span>
                </div>

                <div className="achievement-item">
                    <span>🏆 <strong>Participant, Codethon’25:</strong> Competed in a college-level coding competition organized by ITSA, demonstrating strong problem-solving and competitive programming skills.</span>
                </div>

                <div className="achievement-item">
                    <span>🏆 <strong>Competitive Programmer:</strong> Solved 300+ problems across platforms like <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>Codeforces</a> and <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>CodeChef</a>, showcasing strong algorithmic thinking and consistency.</span>
                </div>

                <div className="achievement-item">
                    <span>🏆 <strong>DSA Practitioner:</strong> Solved 100+ Data Structures and Algorithms problems on <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>LeetCode</a>, strengthening problem-solving skills and interview readiness.</span>
                </div>

                <div className="achievement-item">
                    <span>🏆 <strong>Certified in Agile Project Management:</strong> Gained knowledge of Agile methodologies including sprint planning, iterative development, and team collaboration practices.</span>
                </div>

            </div>
        </section>
    );
};

export default Achievements;