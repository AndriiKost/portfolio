import React from 'react';

import './header.css';

const Header = (props) => {
    const defineDescription = () => (
        <h4>Need help with building your web application? Reach out to me at <a href="mailto:hello@nadriikost.dev">hello@nadriikost.dev</a>.</h4>
    );

    const projectLink = props.link ? props.link : null;
    const freeHostingWarning = 'Please note! This project hosted on the free hosting platform, and will take up to 15 seconds to open first time. If project has back end logic or connected to cloud, you will have a delay of retrieving or sending data ONLY FIRST TIME.';

    return (
        <div className="header">
            <div className="header-container">
                <h1>{props.title}</h1>
                <div className="header-description">
                <h4 className="header-project-link"><a href={projectLink} target="_blank" rel="noopener noreferrer" >{projectLink}</a></h4>
                <p>{props.freeHosting ? freeHostingWarning : null}</p>
                    {defineDescription(props.title)}
                </div>
            </div>
        </div>
    );
}

export default Header;