import React,{useState} from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head.js';

import Footer from './Components/Footer.js';

import Workbody from './Components/Workbody';
import Homebody from './Components/Homebody';
import About from './Components/About.js';


function App() {
  const [step, stepUpdate]= useState('1');

  

  return (
    <>
     <div className="h-sp">
            <div className="row m-0 p-2">
                <div className="col-md-6">
                    <p className="h-logo txt-s">Baqar Raza</p>
                </div>
                <div className="col-md-6 txt-r">

                    <div className="r-flex">
                        <div className="rr-flex">
                        <div><p className="h-ul" onClick={()=>stepUpdate('1')}>Resume</p></div>
                        <div><span className="hs clr-g">/</span></div> 
                        <div><p className="h-ul" onClick={()=>stepUpdate('2')}>About</p></div>  
                        <div><span className="hs clr-g">/</span></div>
                       <div><p className="h-ul" onClick={()=>stepUpdate('3')}>Work</p></div> 
                       </div>
                    </div>
                </div>
            </div>
        </div>
    
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homebody />} />
          <Route path='work' element={<Workbody />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter> */}
      {step==1&&(
        <Homebody />
      )
      }
      {step==2&&(
        <Workbody />
      )
      }
      {step==3&&(
        <About />
      )
      }
      
    <Footer />
    </>
  );
}

export default App;
