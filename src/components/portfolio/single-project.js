import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsAPI from '../../model/api';
import Header from '../Header/header';

class SingleProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProject: ''
        }
    }

    componentWillMount() {
        const projectID = this.props.match.params.id;

        const findProject = ProjectsAPI.projects.find((el) => el.id === parseInt(projectID, 10))

        this.setState({currentProject: findProject})
    }

    render() {

    const defineText = () => {
        if (this.state.currentProject.link.slice(0, 19) === 'https://github.com/') {
            return 'SEE THE CODE'
        } else {
            return 'VISIT WEBSITE'
        }
    }

    return(
    <div>
        <Header title={this.state.currentProject.name}
                link={this.state.currentProject.link} 
                freeHosting={this.state.currentProject.freeHosting} />
            <div className='project_container'>
            <Link to={`/projects`}>
                <div className='back_button'>BACK</div>
            </Link>
            <a href={this.state.currentProject.link} target='_blank' rel="noopener noreferrer">
                <div className='visit_button'>
                {defineText()}
                </div>
            </a>
            <div className='single_project'>
                <div>
                    <img src={this.state.currentProject.image} width='100%' alt="project head"/>
                </div>
                <div>
                    <p className='single_project_description'>
                        {this.state.currentProject.description}
                    </p>
                    <p className='single_project_description'>
                        {this.state.currentProject.role}</p>
                    <h4>Technologies Used:</h4>
                    <ul className="technologiesUsed">
                        {this.state.currentProject.technologiesUsed.map(tech => (
                            <li>
                                <img src={tech.icon} alt={tech.text} />
                                <p>{tech.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>

    )
}
};

export default SingleProject;