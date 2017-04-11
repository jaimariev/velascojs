import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../index.css'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import ContactMe from './ContactMe'

export default React.createClass({
  render() {
    return (
      <Router>  
        <div>
          <ul className="navBar">
            <li><a href="/">Home</a></li>
            <li><a href="skills">Education and Skills</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contactme">Contact Me</a></li>
          </ul>
          <Route exact={true} path='/' component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={ContactMe} />
          <footer>
            <ul className="socialFoot">
              <li><a href="https://github.com/jaimariev" target='blank'><i className="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jaimarie-velasco-9ba21296/" target='blank'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="https://www.facebook.com/jai.doodle" target='blank'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            </ul>
          </footer>
        </div>
      </Router>
    )
  }
})