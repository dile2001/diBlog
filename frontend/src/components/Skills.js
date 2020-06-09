import React from 'react';
import './Skills.css';
const skillset = [
    "C#","Visual Basic.Net","ASP.NET","Java","HTML","CSS", "JavaScript","Accessibility","ReactJs","AngularJs","NodeJs", "Web Services", "Microservices","MongoDb","Docker","AWS", "Oracle","SQL", 
    "IntellliJ", "GIT","SVN", "Linux", "VMWARE", "DevOps"
]
const Skills = () => {
    return (
        <div id="skills">
            <h2 class="heading">Skills</h2>
            <ul>
            {
                skillset.map( str => <li>{str}</li>)
            }
            </ul>
        </div>
    )
}
export default Skills;