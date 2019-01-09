import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectsAPI from '../../model/api';
import { Filter } from '../filter/filter';
import Header from '../Header/header';
import Loader from 'react-loader-spinner'

import './projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: false,
            projects: [],
            loading: false
        }
    }

    performFilterChange = (filterBy) => {
        if (filterBy === '') {
            this.resetFilter();
        } else {
            this.executeFilterChangeOnProps(filterBy);
        }
    }

    resetFilter = () => {
        this.setState({loading: true});
        const currProjects = ProjectsAPI.projects;
        this.setState({projects: currProjects});
        setTimeout(() =>
            this.setState({loading: false, filter: false}), 500);
    }

    executeFilterChangeOnProps = (filterBy) => {
        this.setState({loading: true, filter: true})
        const currProjects = ProjectsAPI.projects;
        let nextProjects = [];
        currProjects.map(cur => {
            if (cur.type && cur.type.toLowerCase() === filterBy) {
                nextProjects.push(cur);
            }
        })
        this.setState({
            projects: nextProjects
        })

        setTimeout(() =>
            this.setState({loading: false}
        ), 500);
    }


    componentDidMount() {
        if (!this.state.filter) {
            const currProjects = ProjectsAPI.projects;
            this.setState({
                projects: currProjects
            })
        } else {
            return;
        }
    }

    render(){
        const projects = this.state.projects.map(el => (
            <div className="single-project" key={el.id}>
                <div>
                    <Link to={`/projects/${el.id}`}>
                        <div className="projectsMainPicture css-arrow">
                            <img className="project-thumbnail" src={el.image} />
                        </div>
                    </Link>
                </div>
                <div className="projectsDescription">
                    <Link to={`/projects/${el.id}`}>
                        <h6 className="project_title">{el.name}</h6>
                    </Link>
                    <a className="website-url" href={el.link} target='blank'>{el.link}</a>
                    <ul className="technologiesUsed">
                        {el.technologiesUsed.map(tech => (
                            <li>
                                <img src={tech.icon} />
                                <p>{tech.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ));

        const loader = (
                <Loader 
                type="Triangle"
                color="#000"
                height="100"	
                width="100"
                />   
        );

        return(
            <div>
            <Header title={'Projects'}/>
                <div className="projects">
                <Filter handleFilterChange={this.performFilterChange}/>
                    {this.state.loading ? loader : projects}
                </div>
            </div>
        )
    }
}

export default Projects;