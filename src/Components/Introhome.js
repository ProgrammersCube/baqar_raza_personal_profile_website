import React from "react";

import './Intro.css'

import './Poppins/Poppins-Black.ttf'

import Socialicons from './Socialicons.js'



function Introhome(){
    return(
        <>
        <div className="cm-30">
            <div>
                <h1>Hi, I'm Baqar</h1>
            </div>
            <div>
                <p>Currently working as Senior Product Designer @ Developers Studio</p>
            </div>
            {/* social media */}
             <Socialicons/>
        </div>
        </>
    );
}

export default Introhome;