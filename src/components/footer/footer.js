import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
    <footer className="footer">
<div className="left">
<h4>© 2019 Andrii Kost.</h4>
</div>
<div className="right">
    <ul>
        <li>
            <a href="https://twitter.com/andriikost" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} /></a></li>
        <li>
            <a href="https://github.com/AndriiKost" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github-square']} /></a></li>
        <li>
            <a href="https://www.linkedin.com/in/andriikost/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
        <li>
            <a href="https://www.facebook.com/andriikost94" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} /></a></li>
        <li>
            <a href="https://www.instagram.com/andriikost/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
        <li>
            <a href="mailto:andriikost@yahoo.com">
            <FontAwesomeIcon icon="envelope" /></a></li>
    </ul>
</div>
</footer>
);

export default Footer;