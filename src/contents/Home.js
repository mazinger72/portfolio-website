import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//importing the picture as "profilepic".
import profilepic from '../img/IMG_0718.jpg';
import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Rick Barros', 'I am a web developer']} speed={100} eraseDelay={700} />
                <Social />
            </div>
        )
    }
}
export default Home;