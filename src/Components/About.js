import React from "react";
import './About.css'



import Profile from './Assets/service/profile.png';

function About(){
    return(
        <>
            <div className="prl-9 mt-80">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Profile} className="W-Fit"/>
                    </div>
                    <div className="col-md-7 offset-md-1 cm1">
                        <h1>Hello again, I’m Baqar </h1>
                        <p className="cm2">I'm currently working as a Senior Product Designer at Developers Studio where I’m collaborating with all stakeholders (PMs, designers, engineers, customers, VPs, C suite) to design human centered solutions. I traveled to Turkey recently to engage in stakeholder collaboration for a financial platform project.</p>
                        <p className="cm3">I focus on empathy lead design where I try to act as a bridge between the humans and technology so as to make it easy for customers to engage with products intuitively. I enjoy being a generalist with a knack in research, planning, stakeholder collaboration, and prototyping solutions to be tested for usability while keeping all my processes human-centered.</p>
                    </div>
                </div>
                <div className="row cm4">
                    <div className="col">
                        <p>I’ve decided to convert my Passion to Profession. I specialize in building complex dashboards, web & mobile applications, including interactive prototyping. 
I enjoy creating an awesome user experience and designing delightful digital products. I worked with numerous clients from all around the world from early 
startups to well-established companies. I explored various creative fields from Motion Graphics, Logo Design, Graphic Design, and now UI/UX Design. I feel 
that I have the skill set, mind set, and mentality that a Fantastic Designer needs. So, that's my story :)</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;