import React from "react";

import Homebody from './Homebody.js';
import Workbody from './Workbody.js';
import About from './About.js';

import { BrowserRouter,  Routes, Route } from "react-router-dom";

function Innerbody(){
    return(
    <>
{/* <    Homebody/> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homebody />} />
                <Route path="/work" element={<Workbody />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default Innerbody;