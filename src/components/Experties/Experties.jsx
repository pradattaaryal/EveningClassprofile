import React, { useState, useEffect } from 'react';
import { FaCode, FaPaintBrush, FaDatabase } from 'react-icons/fa';  
const Experties = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='service' style={{ height: isLargeScreen ? '90vh' : 'auto', width: '100%', overflowX: 'hidden', overflowY: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa',  height: isLargeScreen ? '100vh' : 'auto', overflow: 'auto', flexDirection: 'column' }}>
        <p style={{ textAlign: 'center',  }}><h5>Services</h5></p>

        <h2 style={{ textAlign: 'center', marginBottom: '6rem' }}>This is My Expertise, The Services<br/> I'll Provide My Clients</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div style={{ height: '100%', borderRadius: '0.75rem', padding: '1rem', border: 'none', backgroundColor: '#fff' }} className="card">
                 
                <div className="card-body">
                  <FaCode style={{ fontSize: '2rem', color: '#0d6efd', marginBottom: '0.5rem' }} /> 
                  <h5 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#0d6efd' }} className="card-title">Development</h5>
                  <p style={{ marginBottom: '2rem' }} className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', fontWeight: '500', borderRadius: '0.375rem', color: '#0d6efd', border: '2px solid black', textDecoration: 'none' }}>Read more</a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div style={{ height: '100%', borderRadius: '0.75rem', padding: '1rem', border: 'none', backgroundColor: '#fff' }} className="card">
                 
                <div className="card-body">
                  <FaPaintBrush style={{ fontSize: '2rem', color: '#0d6efd', marginBottom: '0.5rem' }} />  
                  <h5 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#0d6efd' }} className="card-title">UI & UX Design</h5>
                  <p style={{ marginBottom: '2rem' }} className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', fontWeight: '500', borderRadius: '0.375rem', color: '#0d6efd', border: '2px solid black', textDecoration: 'none' }}>Read more</a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
              <div style={{ height: '100%', borderRadius: '0.75rem', padding: '1rem', border: 'none', backgroundColor: '#fff' }} className="card">
                 
                <div className="card-body">
                  <FaDatabase style={{ fontSize: '2rem', color: '#0d6efd', marginBottom: '0.5rem' }} /> 
                  <h5 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#0d6efd' }} className="card-title">Database Management</h5>
                  <p style={{ marginBottom: '2rem' }} className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <a href="#" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', fontWeight: '500', borderRadius: '0.375rem', color: '#0d6efd', border: '2px solid black', textDecoration: 'none' }}>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experties;
