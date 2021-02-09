import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Full Stack Software Developer Certificate" where="Southern Careers Institute Provided by Woz-U" from="May 2020" to="January 2021" />
                <Widecard title="Associate in Science in Electronic Engineering Technology" where="Miami Dade College" from="1990" to="1995" />
                <Widecard title="High School Diploma" where="Miami Norland Senior High School" from="1988" to="1990" />
            </div>
        )
    }
}
export default Education;