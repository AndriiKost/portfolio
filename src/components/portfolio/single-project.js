import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsAPI from '../../model/api';
import Header from '../Header/header';

const SingleProject = (props) => {

    const projectID = props.match.params.id;
    const selectedProject = ProjectsAPI.projects[projectID-1]
    
    return(
    <div>
        <Header title={selectedProject.name}/>
            <div className='project_container'>
            <Link to={`/projects`}>
                <div className='back_button'>BACK</div>
            </Link>
            <a href={selectedProject.link} target='_blank' >
                <div className='visit_button'>VISIT WEBSITE</div>
            </a>
            <div className='single_project'>
                <div>
                    <img src={selectedProject.image} width='100%'/>
                </div>
                <div>
                    <p className='single_project_description'>
                        {selectedProject.description}
                    </p>
                    <p className='single_project_description'>
                        {selectedProject.role}</p>
                    <h4>Technologies Used:</h4>
                    <ul className="technologiesUsed">
                        {selectedProject.technologiesUsed.map(tech => (
                            <li>
                                <img src={tech.icon} />
                                <p>{tech.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    )
};

export default SingleProject;