import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profilepic.jpg';
import Social from '../components/Social'

class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<br/>
<br/>
<br/>
<ReactTypingEffect className="typingeffect" text={['I am Sinovuyo Solani','I am a Web Developer']} speed={100} eraseDelay={80}/>
<Social />
</div>
)
}
}
export default Home