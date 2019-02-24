import React from 'react';

import './header.css';

const Header = (props) => {
    const defineDescription = (title) => {
        switch (title) {
            case 'Projects':
                return (<h4>Need help with a web application or website? Reach out to me at <a href="mailto:a.kost@deliandigital.com">a.kost@deliandigital.com</a>, or <a href="https://www.deliandigital.com/estimate"  target="_blank" rel="noopener noreferrer">get estimate now</a>.</h4>);
            // case 'United States Tax Services':
            //     return (<h4><a href="http://unitedstatestaxservices.us">http://unitedstatestaxservices.us</a></h4>);
            //     break;
            default:
                return;
        }
    }

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