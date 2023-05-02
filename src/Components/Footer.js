import React from "react";

import './Footer.css'

// import social media reuseable class

import Footersocialicons from './Footersocialicons.js'


function Footer(){
    return(
        <div className="prl-8 mt-80">
            <div className="row m-0 bd-t pt-3 pb-3">
                <div className="col-md-6 p-0 d-flex jcs">
                    <div className="d-flex align-items-center">
                        <div>
                            <p><span className="baqar">Baqar</span></p>
                        </div>
                        <div>
                            <p className="txt"><span className="dash">|</span>baqarraza001@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    {/* scoail meadi */}
                    <Footersocialicons/>
                </div>
            </div>
        </div>
    );
}

export default Footer;