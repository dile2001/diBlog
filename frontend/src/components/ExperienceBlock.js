import React from "react";

const ExperienceBlock = (props) => {
    const {company,position,from,to,joblist} = props.company;
    return (
            <div class="vtimeline-point">
            <div class="vtimeline-icon">
            <i class="fa fa-map-marker"></i>
            
            </div>
                <div class="vtimeline-block"><span class="vtimeline-date">{from} – {to}</span>
                    <div data-date={from +"-"+ to} class="vtimeline-content">
                        <h3>{company}</h3>
                        <h4>{position}</h4>
                        <p>
                        </p>
                        <div class="education-block">

                        
                        <ul>
                            {
                                joblist.map( elem => <li>{elem}</li>)
                            }
                        </ul>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
    )
}
export default ExperienceBlock;