import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">Portfolio.</div>
            <ul className={`nav-links ${isOpen ? 'mobile-active' : ''}`}>
                <li><a href="#about" onClick={closeMenu}>About</a></li>
                <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                {/* <li><a href="#youtube" onClick={closeMenu}>YouTube</a></li> */}
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span style={isOpen ? { transform: 'rotate(45deg) translate(5px, 6px)' } : {}}></span>
                <span style={isOpen ? { opacity: 0 } : {}}></span>
                <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px, -6px)' } : {}}></span>
            </div>
        </nav>
    );
};

export default Navbar;
