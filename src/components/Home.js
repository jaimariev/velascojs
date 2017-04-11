import React from 'react'
import Image from '../api/assets/jai2.jpg'
import '../index.css'


export default React.createClass({
  render(){
    return (
      <div className="home">
        <h1>{"{ VelascoJS }"}</h1>
        <img src={Image} alt="me myself and i" className="myImg" />
        <h2>Hi, my name is Jai</h2>
        <h3>I'm a Junior Front End Developer</h3>
        <h3>This is my portfolio</h3>
      </div>
    )
  }
})