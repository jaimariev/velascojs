import React from 'react'
import '../index.css'
import Resume from '../api/assets/JaimarieVelasco.pdf'


export default React.createClass({
  render(){
    return (
      <div className="mainDiv">
        <div className="divOne">
          <div className="eduDiv">
            <h2>Education</h2>
            <p>Las Vegas High School</p>
            <span>Graduated | 2005 </span>
            <hr/>
            <p>The Iron Yard</p>
            <span>Graduated | Front End Engineering Certificate</span>
          </div>
          <div className="expDiv">
            <h2>Work History</h2>
            <p>The Iron Yard | Las Vegas Campus</p>
            <span>Operations Assistant | July 2016 - Present</span>
            <hr/>
            <p>Caesars Entertainment | Planet Hollywood</p>
            <span>Box Office Supervisor | December 2013 - May 2015</span>
            <hr/>
            <p>BASE Entertainment | Planet Hollywood</p>
            <span>Box Office Supervisor | March 2007 - December 2013</span>
          </div>
        </div>
        <div className="divTwo">
          <div className="skillsDiv">
            <h2>Development Skills</h2>
            <ul className="techSkills">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>BackboneJS</li>
              <li>Ajax</li>
              <li>Mustache</li>
              <li>UnderscoreJS</li>
              <li>AngularJS</li>
              <li>ReactJS</li>
              <li>Node</li>
              <li>Python</li>
              <li>Django</li>
              <li>Postgres</li>
              <li>Java</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <h2>Other Skills</h2>
            <ul>
              <li>Customer Service</li>
              <li>Event Management</li>
              <li>Experience with Salesforce</li>
              <li>Money Handling</li>
              <li>Event Planning</li>
              <li>Microsoft Office</li>
              <li>Hospitality</li>
              <li>Operations Management</li>
              <li>Basic Marketing Skills</li>
              <li>Supervising 8+ employees</li>
              <li>Assisted in Event Auditing</li>
              <li>Social Networking</li>
            </ul>
          </div>
          <div className="resumeDiv">
            <h2><a href={Resume} target="blank" className="resume">Click here for my official resume</a></h2>
          </div>
        </div>
      </div>
    )
  }
})