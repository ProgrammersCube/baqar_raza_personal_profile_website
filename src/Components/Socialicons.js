import React from "react";

// importing social media icons

import msg from './Assets/social_icons/msg.png';
import insta from './Assets/social_icons/instagram.png';
import viemo from './Assets/social_icons/vimeo.png';
import dribl from './Assets/social_icons/dribbble.png';
import be from './Assets/social_icons/behance.png';
import lin from './Assets/social_icons/linkedin.png';





function Socialicon(){
    return(
        <div className="d-flex">
            <div className="">
                <img src={msg} className="pr-2" />
            </div>
            <div className="">
                <img src={insta} className="pl-2 pr-2" />
            </div>
            <div className="">
                <img src={viemo} className="pl-2 pr-2" />
            </div>
            <div className="">
                <img src={dribl} className="pl-2 pr-2" />
            </div>
            <div className="">
                <img src={be} className="pl-2 pr-2" />
            </div>
            <div className="">
                <img src={lin} className="pl-2 pr-2" />
            </div>
        </div>
    );
}

export default Socialicon;