import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ height: '8%', width: '100%', zIndex: '100', position: 'fixed', transition: 'background-color 0.3s, color 0.3s', backgroundColor: isScrolled ? 'white' : 'transparent', color: isScrolled ? 'black' : 'white' }}>
        <div className="container" style={{ width: isLargeScreen ? '80%' : '100%' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <a className="navbar-brand" href="#" style={{ color: isScrolled ? 'black' : 'white', fontWeight: 'bold' }}>Aatic</a>
            </div>
            <div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ color: isScrolled ? 'black' : 'white' }}
              >
                <span className="navbar-toggler-icon" style={{ color: isScrolled ? 'black' : 'white' }}></span>
              </button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-center">
              {["home", "about", "service", "pricing", "contact"].map((item, index) => (
                <Link 
                  key={index}
                  spy={true} 
                  smooth={true} 
                  offset={-63} 
                  duration={100} 
                  to={`${item.toLowerCase()}`}
                  className="nav-link"
                  style={{ color: isScrolled ? 'black' : 'white', fontWeight: 'bold', cursor: 'pointer',textTransform: 'capitalize',fontFamily:"monospace" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
