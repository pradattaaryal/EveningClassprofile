import React, { useState, useEffect } from 'react';
import l from './l.jpeg';
import { Typewriter } from 'react-simple-typewriter';

const Landing = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='home' style={{ color: '#fff', height: '100vh', width: '100%', backgroundImage: `url(${l})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <div className='container' style={{ height: '93vh', display: 'flex', alignItems: 'center', width: isLargeScreen ? '80%' : '100%', padding: isLargeScreen ? '0' : '0 1rem' }}>
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
          <h1 className=' '>Pradatta Aryal</h1>
          <h1 className='mb-4 font-extrabold'>
            <Typewriter
              words={['I Love Developing', 'I Love Designing', 'Let,s Be Frined',  ]}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={200}
              deleteSpeed={200}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
             />
          </h1>
          <p style={{ width: isLargeScreen ? '50%' : '100%' }}>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="my-4" style={{ width: isLargeScreen ? '50%' : '100%', padding: '0' }}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <button type="button" className="btn btn-primary" style={{ width: isLargeScreen ? '100%' : '40%', marginBottom: isLargeScreen ? '0' : '1rem' }}>
                  HIRE ME
                </button>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <button type="button" className="btn btn-light" style={{ width: isLargeScreen ? '100%' : '40%' }}>
                  PORTFOLIO
                </button>
              </div>
            </div>
          </div>
          <div style={{ color: 'black', fontWeight: 'bolder', textAlign: isLargeScreen ? 'left' : 'center' }}>
            <a href="" className='mx-2' style={{ textDecoration: 'none', color: '#fff' }}>
              + Twitter
            </a>
            <a href="" className='mx-2' style={{ textDecoration: 'none', color: '#fff' }}>
              + LinkedIn
            </a>
            <a href="" className='mx-2' style={{ textDecoration: 'none', color: '#fff' }}>
              + Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
