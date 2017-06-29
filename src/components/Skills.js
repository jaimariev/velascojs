import React from 'react'
import '../index.css'


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
            <h2>Skills</h2>
          </div>
          <div className="resumeDiv">
            <h2><a href="">Click here for my official resume</a></h2>
          </div>
        </div>
      </div>
    )
  }
})