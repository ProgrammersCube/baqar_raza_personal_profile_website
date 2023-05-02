import React from "react";
import './Intro.css'

// import social media reuseable class

import Homeintro from './Introhome.js';
import Introwork from './Introwork.js';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function Intro(){
    return(
        <div className="cp-2">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homeintro />} />
                    <Route path="/work" element={<Introwork />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Intro;