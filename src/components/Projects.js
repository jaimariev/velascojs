import React from 'react'
import '../index.css'
import Etsy from '../api/assets/Etsy.png'
import Jto from '../api/assets/jto.png'
import IronFoos from '../api/assets/IronFoos.png'
import Skate from '../api/assets/Skate.png'

export default React.createClass({
  render(){
    return (
      <div className="projectsDiv">
        <h2 className="projects">Some of my projects</h2>
        <ul className="projOne">
          <li>
            <a href="https://jaimariev.github.io/etsy-project/" target="blank"><img src={Etsy} alt="etsy project" /></a>
            <div className="projInfo">
              <h3>Recreating Etsy</h3>
              <p>Summary : </p>
              <span>We took a page from the Etsy site and recreated it.</span>
              <p>Technologies : </p>
              <span>HTML, CSS, Javascript, Ajax, and jQuery</span>
              <p><a href="https://github.com/jaimariev/etsy-project/tree/gh-pages" target="blank">Click here for the code</a></p>
            </div>
          </li>
          <li>
            <a href="http://jto-restaurant.surge.sh/" target="blank"><img src={Jto} alt="mock restaurant site" /></a>
            <div className="projInfo">
              <h3>Group Project</h3>
              <p>Summary : </p>
              <span>We created a site based on a restaurant from a mock client</span>
              <p>Technologies : </p>
              <span>HTML, CSS, Javascript, Mustache, jQuery, and Ajax</span>
              <p><a href="https://github.com/jaimariev/Group_Project/tree/gh-pages" target="blank">Click here for the code</a></p>
            </div>
          </li>
        </ul>
        <ul className="projTwo">
          <li>
            <a href="http://ironfoos.herokuapp.com" target="blank"><img src={IronFoos} alt="hackathon project" /></a>
            <div className="projInfo">
              <h3>IronFoos - Hackathon</h3>
              <p>Summary : </p>
              <span>We created a tournament style board where students of The Iron Yard can use when they wanted to play Foosball.</span>
              <p>Technologies : </p>
              <span>HTML, CSS, JavaScript, Django, Python, and Postgres</span>
              <p><a href="https://github.com/peteralfredoflynn/iron_foos" target="blank">Click here for the code</a></p>
            </div>
          </li>
          <li>
            <img src={Skate} alt="basic html and css" />
            <div className="projInfo">
              <h3>Skate Site</h3>
              <p>Summary : </p>
              <span>A basic HTML and CSS driven site</span>
              <p>Technologies : </p>
              <span>HTML & CSS</span>
              <p><a href="https://github.com/jaimariev/sk8-site" target="blank">Click here for the code</a></p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
})