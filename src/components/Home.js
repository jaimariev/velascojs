import React from 'react'
import Image from '../api/assets/candid.jpg'
import '../index.css'


export default React.createClass({
  render(){
    return (
      <div className="home">
        <h1>{"{ VelascoJS }"}</h1>
        <img src={Image} alt="me myself and i" className="myImg" />
        <h2>Hello, my name is Jaimarie</h2>
        <h3>I'm a Junior Front End Developer</h3>
        <h3>Welcome to my portfolio</h3>
      </div>
    )
  }
})