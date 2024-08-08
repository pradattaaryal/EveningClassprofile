import React from 'react'
import { useState,useEffect } from 'react';
import f from './f.jpeg'
const Contact = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
    
<div className='' style={{width:"100% ",backgroundColor:"#f8f9fa",display:"flex",justifyContent:"center",alignContent:"center"}}>
<div id='contact' className='row d-flex ' style={{ height: isLargeScreen ? "92vh" : "auto", width: "100%"  ,backgroundColor:"#f8f9fa"  }}>
<div className='col-12 col-md-6' style={{ backgroundImage: `url(${f})`,  backgroundSize: 'cover' }}></div>
<div className='col-12 col-md-6   d-flex ' style={{alignContent:"center", flexDirection:"column"}}>
        <h1 className='mb-4'>Contact us</h1>
        <h6 className='mb-4'>We're open for any suggestion or just to have a chat</h6>
            <div className='row d-flex mb-4'>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
                <h6>My Address:</h6>
                <p>721 New York NY 10016<br />198 West 21th Street, Suite</p>
            </div>
            <div className='col-12 col-md-4 mb-3 mb-md-0'>
                <h6>My Phone:</h6>
                <p>+ 1235 2355 98</p>
            </div>
            <div className='col-12 col-md-4'>
                <h6>My Email:</h6>
                <p>info@yoursite.com</p>
            </div>
            </div>

        <div className='mb-4'><div className="row ">
            <div className="col-12 col-md-6  " style={{marginBottom:isLargeScreen?"nnone":"0.75rem"}}>
                <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="col-12 col-md-6 ">
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
        </div>
        <div className='my-2'> <input type="text" className="form-control" id="email" placeholder="subject" /></div>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="create a message here" rows="3"></textarea>
            </div>
            
        </div>
        <button type="button" className="btn btn-primary mb-4 " style={{width:isLargeScreen?"40%":"auto"}}>Send Message</button>
        <h4 className='mb-4 text-center'>Follow me here</h4>
        <div style={{ color: "black",marginBottom:"50px",width:"100%",display:"flex",justifyContent:"space-evenly" }}>
            <a href="" style={{ textDecoration: "none", marginRight: "10px",  fontWeight:"bold", color: "#0d6efd" }}>FACEBOOK</a>
            <a href="" style={{ textDecoration: "none", marginRight: "10px", fontWeight:"bold",  color: "#0d6efd" }}>INSTAGRAM</a>
            <a href="" style={{ textDecoration: "none", marginRight: "10px", fontWeight:"bold",  color: "#0d6efd" }}>LINKEDIN</a>
            <a href="" style={{ textDecoration: "none", marginRight: "10px", fontWeight:"bold",  color: "#0d6efd" }}>DRIBBBLE</a>
        </div>

        
    </div>
</div>
</div>
  )
}

export default Contact