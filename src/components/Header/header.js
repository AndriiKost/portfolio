import React from 'react';

import './header.css';

const Header = (props) => {
    const defineDescription = (title) => {
        switch (title) {
            case 'Projects':
                return (<h4>Need help with web application or website? Reach out to me at <a href="#">DelianDigital</a>.</h4>);
                break;
            // case 'United States Tax Services':
            //     return (<h4><a href="http://unitedstatestaxservices.us">http://unitedstatestaxservices.us</a></h4>);
            //     break;
        }
    }

    const projectLink = props.link ? props.link : null;

    return (
        <div className="header">
            <div className="header-container">
                <h1>{props.title}</h1>
                <div className="header-description">
                <h4 className="header-project-link"><a href={projectLink} target="_blank" >{projectLink}</a></h4>
                    {defineDescription(props.title)}
                </div>
            </div>
        </div>
    );
}

export default Header;