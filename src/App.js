import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/navigation';
import Projects from './components/portfolio/projects';
import SingleProject from './components/portfolio/single-project';
import Landing from './components/landing/landing';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faGithubSquare, faLinkedinIn, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

library.add(faTwitterSquare, faGithubSquare, faLinkedinIn, faFacebookSquare, faInstagram, faEnvelope)

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
          <Switch>
            <Route exact path='/projects/:id' component={SingleProject}/>
            <Route exact path='/projects' component={Projects}/>
            {/* <Route exact path='/contact' component={Contact}/> */}
            <Route component={Landing}/>
          </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;