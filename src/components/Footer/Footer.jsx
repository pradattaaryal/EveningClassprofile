import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div id='footer' >
    <div className='' style={{width:"100% ",backgroundColor:"#f8f9fa" ,display:"flex",justifyContent:"center",alignContent:"center"}}>

    <div  className='row text-center ' style={{height:"auto",width:"100%", backgroundColor:"#0d6efd"}}>
        <div className='col-12 col-md-6 mb-4 my-4'>
            <h3>Have any works you want to done by me?</h3>
            <p>Far far away, behind the word mountains</p>
        </div>
        <div className='col-12 col-md-6  my-5'>
            <button type="button" className="btn btn-primary  px-3 py-2 " style={{width:"auto", border:"2px solid white    "}}>Send Message</button>
        </div>
    </div></div>
    <footer style={{color:"black"}} className="text-center text-lg-start p-4 bg-light text-muted">
    <div style={{color:"black"}} className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Kn.Ford
          </h6>
          <p>
            A small river named Duden flows by their place and supplies it with the necessary regalia.
          </p>
          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Services</h6>
          <p><a href="#" style={{textDecoration:"none"}} className="text-reset">Web Design</a></p>
          <p><a href="#" style={{textDecoration:"none"}} className="text-reset">Web Development</a></p>
          <p><a href="#" style={{textDecoration:"none"}} className="text-reset">Graphic Design</a></p>
          <p><a href="#" style={{textDecoration:"none"}} className="text-reset">UI/UX Design</a></p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Have a Question?</h6>
          <p><i className="fas fa-home me-3"></i> 203 Fake St. Mountain View, San Francisco, California, USA</p>
          <p><i className="fas fa-envelope me-3"></i> info@yourdomain.com</p>
          <p><i className="fas fa-phone me-3"></i> +2 392 3929 210</p>
        </div>
      </div>
    </div>
    <div className="text-center p-4" style={{  color:"black", backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 All rights reserved | This template is made with <i className="fas fa-heart"></i> by <a href="https://colorlib.com" className="text-reset fw-bold">Colorlib</a>
    </div>
  </footer></div>
    
  );
};

export default Footer;
