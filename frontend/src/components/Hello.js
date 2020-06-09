import React from 'react';
import './Hello.css';
const Hello = () => {
    return (
        <section  id="hello" className="section">
            
            <div class="table">
                <div class="row">
                    <div class="cell">
                        <div class=" about-img wow slideInLeft">
                            <img src="profile/photo.jpg" alt="" class="img-responsive"/>
                        </div>
                    </div>
                    <div class="cell">
                        <div class=" about-me wow slideInRight">
                            <div class="about-me-title">
                                <h1><span class="point">About</span></h1>
                            </div>
                            <div class="about-me-text">
                                <div class="opacity-box">
                                    <p>Hello, I am Di Le, a Technologist, a Typical Software Engineer Who Falls In Love With Everything 
                                        That Relates To Increase Knowledge And Create Innovations In short, I am "Jack of most of the trade but master of some skilled in . I currently work
                                        as a software engineer for Emirates airline, located in Dubai, UAE.</p>
                                </div>
                            </div>
                            <div class="about-me-info">
                                <p>
                                    <span class="span-title">Phone: </span>
                                    <span>+971 55 714 38 16</span>
                                </p>
                                <p>
                                    <span class="span-title">Email: </span>
                                    <span>di@dile.dev</span>
                                </p>
                                <p>
                                    <span class="span-title">Address: </span>
                                    <span>Al Salem tower 2, Al Nahda 1, Dubai</span>
                                </p>
                                
                            </div>
                            {/* <div class="about-btns">
                                <a data-toggle="modal" data-target="#contact-modal" href="#" class="site-btn">Contact me</a>
                                <a href="./download/example.pdf" class="site-btn gray-btn">Download cv</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hello;