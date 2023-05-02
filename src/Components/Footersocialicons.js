import React from "react";

// importing social media icons

import './Footersocialicons.css'

import msgf from './Assets/social_icons/Vector.png';
import instaf from './Assets/social_icons/Group.png';
import viemof from './Assets/social_icons/Vector_1.png';
import driblf from './Assets/social_icons/Vector_2.png';
import bef from './Assets/social_icons/Group_1.png';
import linf from './Assets/social_icons/Group_6.png';

function Footersocialicons(){
    return(
        <div className="d-flex jce p-0 mt-2">
            <div className="">
                <img src={msgf} className="pr-2 float-right" />
            </div>
            <div className="">
                <img src={instaf} className="pl-2 pr-2 float-right" />
            </div>
            <div className="">
                <img src={viemof} className="pl-2 pr-2 float-right" />
            </div>
            <div className="">
                <img src={driblf} className="pl-2 pr-2 float-right" />
            </div>
            <div className="">
                <img src={bef} className="pl-2 pr-2 float-right" />
            </div>
            <div className="">
                <img src={linf} className="pl-2 float-right" />
            </div>
        </div>
    );
}

export default Footersocialicons;