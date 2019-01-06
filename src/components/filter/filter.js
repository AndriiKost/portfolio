import React from 'react';
import './filter.css';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBy: ''
        }
    }

    ComponentDidMount() {
        this.setState({filterBy: ''});
    }

    performFilter(filterBy) {
        if (this.state.filterBy !== filterBy) {
            this.setState({filterBy: filterBy});
            this.props.handleFilterChange(filterBy);
        } else {
            this.setState({filterBy: ''});
            this.props.handleFilterChange('');
        }
    }

    render() {

        return (
        <div className="filter-bar left">
            <h2>Filter by:</h2>
            <ul>
                {/* style={{color: this.state.filterBy === 'front end' ? '#8b0000' : '#000'}}  */}
                <li className="filter-by-title">Stack:</li>
                <li onClick={() => this.performFilter('front end')} 
                    className={this.state.filterBy === 'front end' ? "filter-by-stack cool-link active" : "filter-by-stack cool-link"}>Front End</li>
                <li onClick={() => this.performFilter('back end')} 
                    className={this.state.filterBy === 'back end' ? "filter-by-stack cool-link active" : "filter-by-stack cool-link"}>Back End</li>
                <li onClick={() => this.performFilter('full stack')} 
                    className={this.state.filterBy === 'full stack' ? "filter-by-stack cool-link active" : "filter-by-stack cool-link"}>Full Stack</li>
            </ul>
        </div>
        );
    }
}