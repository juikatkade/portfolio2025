import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/jui.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            if (shape1Ref.current) {
                shape1Ref.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
            }
            if (shape2Ref.current) {
                shape2Ref.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content fade-in-up">
                <div className="hero-text">
                    <h1 className="hero-title">Hi, I'm <span className="highlight">Jui</span></h1>
                    <h2 className="hero-subtitle">
                        <span style={{ fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Data Scientist.', 'Software Engineer.', 'DSA Enthusiast.']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={20}
                                deleteSpeed={10}
                                delaySpeed={2000}
                            />
                        </span>
                    </h2>
                    <p className="hero-desc">Building scalable data solutions and ML projects. Skilled in problem solving and a DSA enthusiast.</p>
                    <div className="cta-group">
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                        <a href="#projects" className="btn btn-secondary">View Work</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={profileImg} alt="Profile Picture" className="profile-img" />
                </div>
            </div>
            <div className="hero-visual fade-in">
                <div className="floating-shape shape-1" ref={shape1Ref}></div>
                <div className="floating-shape shape-2" ref={shape2Ref}></div>
            </div>
        </section>
    );
};

export default Hero;
