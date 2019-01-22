import React from 'react';
import { Link } from 'react-router-dom'

import './navigation.css';

// const navigation = () => (
//     <nav>
//         <div className="left-menu">
//             <Button component={Link} to="/">ANDRII KOST</Button>
//         </div>
//         <div className="right-menu">
//             <Button component={Link} to="/about">About</Button>
//             <Button component={Link} to="/projects">Projects</Button>
//         </div>
//     </nav>
// )

const navigation = () => (
    <nav className="clearfix">
        <div className="left">
            <Link className="nav-button"  to={'/'}>ANDRII KOST</Link>
        </div>
        <div className="right">
            <ul>
                <li><Link className="nav-button" to={'/projects'}>PROJECTS</Link></li>
                {/* <li><Link className="nav-button" to={'/contact'}>CONTACT</Link></li> */}
                <li><a className="nav-button" href="https://drive.google.com/file/d/1yfooVKu7sldRJEvYmhorf6RaSXoowVX0/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></li>
            </ul>
        </div>
    </nav>
)

export default navigation;