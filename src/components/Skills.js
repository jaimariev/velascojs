import React from 'react'
import '../index.css'


export default React.createClass({
  render(){
    return (
      <div className="mainDiv">
        <div className="divOne">
          <div className="eduDiv">
            <h2>Education</h2>
          </div>
          <div className="expDiv">
            <h2>Work Experience</h2>
          </div>
        </div>
        <div className="divTwo">
          <div className="skillsDiv">
            <h2>Skills</h2>
          </div>
          <div className="resumeDiv">
            <h2><a href="">Click here to check out my resume</a></h2>
          </div>
        </div>
      </div>
    )
  }
})