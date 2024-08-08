// Testimonial.js

import React, { useState } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'pradatta',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      position: 'HR'
    },
    {
        id: 2,
        name: 'hari',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        position: 'HR'
      }, {
        id: 3,
        name: 'shyam',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        position: 'HR'
      }, {
        id: 4,
        name: 'Gita',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        position: 'HR'
      },
  ];

  const cardStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
    transition: 'box-shadow 0.3s ease',
    marginBottom: '150px',
     
  };
  

  const cardBodyStyle = {
    padding: '20px'
  };

  const cardFooterStyle = {
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderTop: 'none'
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="testimonials" style={{ paddingTop:"7%",paddingBottom:"7%",backgroundColor:"#f8f9fa"}}>
      <div className="container " >
        <h2 className="text-center mb-5">Testimonials</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel"   >
          <div className="carousel-inner"  >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`} >
                <div  className="d-flex justify-content-center" >
                  <div className="card" style={{ ...cardStyle, ...(hoveredCard === testimonial.id && { boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }) }} onMouseEnter={() => setHoveredCard(testimonial.id)} onMouseLeave={() => setHoveredCard(null)} >
                    <div className="card-body" style={{cardBodyStyle   }}>
                      <p className="card-text" style={{margin:"20px"}}>{testimonial.text}</p>
                    </div>
                    <div className="card-footer text-muted" style={cardFooterStyle}>
                      <strong>{testimonial.name}</strong><br />{testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
