import React from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = () => (
    <div>
        <div className="header">
            <img className="portrait-picture" alt="Andrii Kost" src="https://s3.us-east-2.amazonaws.com/andriikost.dev/IMG_2525.jpeg" />
            <h1>Andrii Kost</h1>
            <div className="header-description">
                <h4>Full Stack Developer.</h4>
                <h5>Inspired by building technologies.</h5>
            </div>
        </div>
        <div className="content">
            <div className="about-section">
                <h2>About Me</h2>
                <p>I love programming, learning new (and old) technologies, traveling and snowboarding. I build websites and applications out of my company Delian Digital. I spend my free time to learn new skills, technologies or to improve existing ones, play active sport games or simply go to the gym. </p>
                <p></p>
            </div>
            <div className="contact-section">
                <h2>Contact</h2>
                <ul>
                    <li>
                        <a href="https://twitter.com/andriikost" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter-square']} /><span>Twitter</span></a></li>
                    <li>
                        <a href="https://github.com/AndriiKost" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github-square']} /><span>Github</span></a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/andriikost/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} /><span>Linkedin</span></a></li>
                    <li>
                        <a href="https://www.facebook.com/andriikost94" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} /><span>Facebook</span></a></li>
                    <li>
                        <a href="https://www.instagram.com/andriikost/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} /><span>Instagram</span></a></li>
                    <li>
                        <a href="mailto:hello@andriikost.dev">
                        <FontAwesomeIcon icon="envelope" /><span>Email</span></a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Landing;