import React from 'react';
import ExperienceBlock from './ExperienceBlock';
import './Experiences.css';
const Experiences = () => {
    const companies = [
        {company:'EMIRATES AIRLINE Dubai',position: 'Senior Frontend Developer', from:'Sep 2018',to:'Present',
            joblist:[`Lead technical design and build for small to medium sized solutions in a team. 
            Translate functional and non-functional requirements into fit for purpose technical design`,
            `The role involves the design, development, implementation and maintenance of technology solutions and products that support the Emirates Group Business`
            ]
        },
        {
            company:'DXC Technology',position: 'Principal Engineer - Team Lead', from:'Jun 2015',to:'Sep 2018',
            joblist:[
                'Designed, estimated, and reviewed software application solutions',
                'Worked directly with customer technical leads onsite and offsite'
                ]
        },
        {
            company:'Focus Asia',position: 'IT Manager', from:'August 2012',to:'Jun 2015',
            joblist:[
                'Managed and enhanced https://focus.asia as a fullstact developer',
                'Developed accounting software application dedicated to the company’s needs using C#, SQL Server',
                'Delevoped as business requirement to improve revenue',
                ''
                ]
        },
        {
            company:'Abaki Pty. - Pracice 2000',position: 'IT Customer Support', from:'Sep 2007',to:'April 2012',
            joblist:[
                'Provided excellent customer support to Australian users',
                'Developed the company product as client requirement'
                
                ]
        },
        {
            company:'VATC - Vietnam American Training Colleague',position: 'IT Staff', from:'March 2005',to:'April 2007',
            joblist:[
                'Provided excellent customer support to Australian users',
                'Developed the company product as client requirement'
                
                ]
        },
        {
            company:'Evergreen Line',position: 'IT Staff', from:'Oct 2002',to:'Feb 2005',
            joblist:[
                'Provided excellent customer support to Australian users',
                'Developed the company product as client requirement'
                
                ]
        }

    ];
    return (
        <div id="experience">
            <h2 class="heading">Experience</h2>
            <div id="experience-timeline">
                {
                companies.map(company => <ExperienceBlock company={company} />)
                }
            </div>
        </div>
    )
}
export default Experiences;