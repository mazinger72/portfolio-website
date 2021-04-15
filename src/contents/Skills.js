import React, { Component } from 'react'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['BILINGUAL-SPANISH/ENGLISH','HTML', 'CSS', 'JS', 'REACT JS', 'REACT NATIVE', 'NODEJS', 'GITHUB', 'NGINX', 'CORDOVA', 'MYSQL', 'REDUX', 'IONIC', 'MONGODB', 'JAVA', 'JQUERY', 'EXPRESSJS']
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills;