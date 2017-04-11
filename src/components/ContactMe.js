import React from 'react'
import '../index.css'

export default React.createClass({
  render(){
    return (
      <div>
        <form action="https://formspree.io/jaimarievelasco@ymail.com" method="POST">
          <input type="text" name="name" placeholder="First Name" />
          <input type="text" name="name" placeholder="Last Name" />
          <input type="email" name="_replyto" placeholder="Email" />
          <textarea placeholder="Enter Comment"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
})