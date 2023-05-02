import React from "react";


import image1 from './Assets/service/img_1.png';
import image2 from './Assets/service/img_2.png';
import image3 from './Assets/service/img_3.png';
import image4 from './Assets/service/img_4.png';
import image5 from './Assets/service/img_5.png';
import image6 from './Assets/service/img_6.png';

import './Body.css'


import Introwork from './Introwork';

function Workbody(){
    return(
        <>
        <div className="prl-9 mt-80">
        <Introwork />
            <div className="row m-0 mb-9">
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image1} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>Wallet Api - Building a blockchain wallet for the next generation of cryptocurrency</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>Designing a crypto wallet, that allows users to store, manage, and exchange cryptocurrencies such as Bitcoin, Ethereum, or Litecoin.</p>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>interaction design, ui/ux design, web, blockchain</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image2} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>Ethos - Improvising Ethos with Customized Software Solutions</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>A Ethos is a Scandinavian company that offers the services of sustainable business development.</p>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>interaction design, ui/ux design, web</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image3} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>CardEye - Helping fintech to reimagine business banking for online users</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>A custom payment gateway solutions is integrated with a variety of different systems and platforms.</p>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>interaction design, ui/ux design, web, fintech</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image4} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>VBC - Collection of 150+ E-Commerce and digital skills in the world</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>VBC covers an extensive range of skills that will enable you to earn money by offering services to clients across the globe.</p>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>interaction design, ui/ux design, Mobile, online learning platform </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image5} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>Ethos - Improvising Ethos with Customized Software Solutions</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>A unique marketplace for home-based sellers to focus on quality products without thinking about the ambient processes inolved to sell an item</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3">
                        <img src={image6} className="W-fit" />
                    </div>
                    <div className="p-3">
                        <h2>Ethos - Improvising Ethos with Customized Software Solutions</h2>
                    </div>
                    <div className="pr-3 pl-3">
                        <p>A unique marketplace for home-based sellers to focus on quality products without thinking about the ambient processes inolved to sell an item</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Workbody;