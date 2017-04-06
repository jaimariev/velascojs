import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

export default React.createClass({
  render() {
    return (
      <div>
        <Router>
          <Route exact={true} path='/' component={Home} />
          <Route path='/aboutme' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactme' component={ContactMe} />
        </Router>
      </div>
    )
  }
})