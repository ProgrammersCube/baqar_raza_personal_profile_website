import React from "react";
import ReactDOM from "react-dom/client";
import './Head.css';

import { Outlet, Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';

function Head(){
    // const linkrout = useNavigate();

    // const gothome = () => {
    //     linkrout("/");
    // }
    return(
        <>
        <div className="h-sp">
            <div className="row m-0 p-2">
                <div className="col-md-6">
                    <p className="h-logo txt-s">BaqarRaza</p>
                </div>
                <div className="col-md-6 txt-r">

                    <div className="r-flex">
                        <div className="rr-flex">
                        <div><p className="h-ul"><a href="/">Resume</a></p></div>
                        <div><span className="hs clr-g">/</span></div> 
                        <div><p className="h-ul"><a href="/about">About</a></p></div>  
                        <div><span className="hs clr-g">/</span></div>
                       <div><p className="h-ul"><a href="/work">Work</a></p></div> 
                       </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Outlet /> */}
        </>
    );
}

export default Head;