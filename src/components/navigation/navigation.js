import React from 'react';
import { Link } from 'react-router-dom'

import './navigation.css';

 class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleButton: false
        }
        this.handleResumeButton.bind(this)
        this.resetResumeButton.bind(this)
    }

    handleResumeButton = () => {
        this.setState({toggleButton: !this.state.toggleButton})
    }

    resetResumeButton = () => {
        this.setState({toggleButton: false})
    }

    render() {
        const nestedNav = (
            <div className="nestedNav">
            <hr/>
                <ul>
                    <li><a className="nav-button" href="https://drive.google.com/open?id=11QTdaSvMuwrz-a0iapyFGy3kZ_qltGFs" target="_blank" rel="noopener noreferrer">PDF</a></li>
                    <li><a className="nav-button" href="https://drive.google.com/open?id=1L0jYGc0vhgLarPi7HsaUT2Hc_EDcgEpX" target="_blank" rel="noopener noreferrer">WORD</a></li>
                </ul>
            </div>
        )
        return (
        <nav className="clearfix">
            <div className="left">
                <Link className="nav-button" onClick={this.resetResumeButton} to={'/'}>ANDRII KOST</Link>
            </div>
            <div className="right">
                <ul>
                    <li><Link className="nav-button" to={'/projects'} onClick={this.resetResumeButton}>PROJECTS</Link></li>
                    <li onClick={this.handleResumeButton}><a className="nav-button">RESUME</a></li>
                </ul>
                {this.state.toggleButton ? nestedNav : null}
            </div>
        </nav>
        )
    }
}

export default Navigation;