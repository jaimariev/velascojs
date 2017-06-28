import React from 'react'
import '../index.css'

export default React.createClass({
  render(){
    return (
      <div className="formDiv">
        <h2 className="contact">Contact Me</h2>
        <p>Call me - <a href="tel: 702-994-6556" className="number">702-994-6556</a></p>
        <p>Or</p>
        <p>Email me below </p>
        <form action="https://formspree.io/jaimarievelasco@ymail.com" method="POST">
          <label htmlFor="name">First Name :</label><br/>
          <input type="text" name="name" placeholder="First Name" /><br/>
          <label htmlFor="name">Last Name :</label><br/>
          <input type="text" name="name" placeholder="Last Name" /><br/>
          <label htmlFor="email">Email :</label><br/>
          <input type="email" name="_replyto" placeholder="Email" className="email" /><br/>
          <textarea placeholder="Enter Comment" className="emailContent"></textarea><br/>
          <input type="submit" value="Send" className="subBtn" />
        </form>
      </div>
    )
  }
})