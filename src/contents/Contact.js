import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3><a href="mailto:ricardo.i.barros@icloud.com">Email: ricardo.i.barros@icloud.com</a></h3>
                <h3><a href="tel:4042343071">Phone: (404) 234-3071</a></h3>
                <Social />
            </div>
        )
    }
}
export default Contact;