import React, {   lazy, useEffect, useRef, useState } from 'react';
const Navbar = lazy(() => import('./components/Navbar/Navbar.jsx'));
const Landing = lazy(() => import('./components/Landing/Landing.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Experties = lazy(() => import('./components/Experties/Experties'));
const Pricing = lazy(() => import('./components/Pricing/Pricing.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer/Footer.jsx'));
const Testimonial = lazy(() => import('./components/Testimonial/Testimonial.jsx'));
const Popup = lazy(() => import('./components/Popup/Popup.jsx'));

  const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`revealing ${isVisible ? 'revealed' : ''}`}
    >
      {children}
    </div>
  );
};

 
const App = () => {
  return (
    <>
      <style>
        {`
          @keyframes appear {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .revealing {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }

          .revealed {
            opacity: 1;
            transform: translateY(0);
            animation: appear 1s ease-out forwards;
          }
        `}
      </style>
     < >
        <Navbar />
        
        <Landing /> 
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Experties /></RevealOnScroll>
        <RevealOnScroll><Pricing /></RevealOnScroll>
        <RevealOnScroll><Testimonial/></RevealOnScroll>
        <RevealOnScroll><Popup/></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
        <RevealOnScroll><Footer /></RevealOnScroll>
        
      </ >
    </>
  );
}

export default App;
