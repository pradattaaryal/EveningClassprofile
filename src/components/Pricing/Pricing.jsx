 import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <div id='pricing' style={{ backgroundColor:"#f8f9fa"}}>
      <div style={{ display: "flex", flexDirection: "column", placeContent: "center",height:isLargeScreen?"100vh":"auto" ,width:"100%" ,backgroundColor:"#f8f9fa"}} className="container ">
      <h5 style={{textAlign:"center"}}>My pricing</h5>
      <h2 className="text-center">Pricing & Packages</h2>
      <div className="row mt-4">
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-center" style={{ width:"100%",margin:"auto",maxWidth:"350px",height:"auto",}}>
            <div className="card-body">
              <div><h5 className="card-title mb-5 mt-3">BASIC PLAN</h5></div>
              <div><h2 className="card-price mb-5">$49K</h2></div>
              <div><p className="card-text mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              <div><a href="#" className="btn btn-primary mb-5">Get Started</a></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-center" style={{ width:"100%",margin:"auto",maxWidth:"350px",height:"auto",}}>
            <div className="card-body">
              <div><h5 className="card-title mb-5 mt-3">BASIC PLAN</h5></div>
              <div><h2 className="card-price mb-5">$49K</h2></div>
              <div><p className="card-text mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              <div><a href="#" className="btn btn-primary mb-5">Get Started</a></div>
            </div>
          </div>
        </div><div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card text-center" style={{ width:"100%",margin:"auto",maxWidth:"350px",height:"auto",}}>
            <div className="card-body">
              <div><h5 className="card-title mb-5 mt-3">BASIC PLAN</h5></div>
              <div><h2 className="card-price mb-5">$49K</h2></div>
              <div><p className="card-text mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></div>
              <div><a href="#" className="btn btn-primary mb-5">Get Started</a></div>
            </div>
          </div>
        </div>
        
         
      </div>
    </div>
    </div>
    
  );
};

export default Pricing;
