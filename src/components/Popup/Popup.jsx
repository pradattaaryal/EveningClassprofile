import React from 'react';

const Popup = () => {
  return (
    <div className=" " style={{backgroundColor:"#f8f9fa",maxWidth:"100%"  , display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',  padding:"5px"}}>
     
      <div className='row' style={{maxWidth:"90%", display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',marginBottom:"100px"  }}>
        <div className='col-12 col-md-6' style={{ maxWidth: '100vw', overflowX: 'auto',objectFit: 'cover' }}>
          <a style={{ display: "block",padding:"8%",backgroundSize:"" }} href="https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/university-of-akron-main-campus-student-recreation-wellness-center.jpg"  >
            <img src="https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/university-of-akron-main-campus-student-recreation-wellness-center.jpg" alt="Thumbnail 1" style={{width:"100%",border:"5px solid black",borderRadius:"50px",objectFit:"cover",}} />
          </a>
        </div>
        <div className='col-12 col-md-6' style={{ maxWidth: '100vw', overflowX: 'auto' ,padding:"2%" }}>
          <a style={{ display: "block", }} href="https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/university-of-missouri-st-louis-touhill-performing-arts-center.jpg" data-lightbox="gallery" data-title="My caption 2">
            <img src="https://res.cloudinary.com/highereducation/image/upload/w_740,h_416,c_fill,f_auto,fl_lossy,q_auto/v1/TheBestSchools.org/university-of-missouri-st-louis-touhill-performing-arts-center.jpg" alt="Thumbnail 2" style={{width:"100%",border:"5px solid black",borderRadius:"50px",objectFit:"cover"}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
