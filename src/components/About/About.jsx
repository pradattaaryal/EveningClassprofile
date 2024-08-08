import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net';
import d from './d.jpg';

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable('#example')) {
      $('#example').DataTable({
        dom: '<"top"r>t<"bottom"lp><"clear">',
        paging: false,
        searching: false,
        lengthChange: false,
        info: false
      });
    }
  }, []);

  return (
    <div id='about' style={{ height: isLargeScreen ? '90vh' : 'auto', width: '100%', overflowX: 'hidden', overflowY: 'hidden',backgroundColor:"#f8f9fa" }}>
      <div className='row' style={{ height: '100%' }}>
        <div className='col-12 col-md-6' style={{ height: '100%', padding: '3%', display: 'flex', alignItems: 'center',justifyContent:"center" }}>
          <img className=' shadow-xl shadow-fuchsia-800' style={{ width: '80%', height: '80%', objectFit: 'cover', border: '2px solid black', borderRadius: '50px' }} src={d} alt="description" />
        </div>

        <div className='col-12 col-md-6' style={{ height: '100%', padding: '3%', paddingRight: isLargeScreen ? '6%' : '3%' }}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ul className="nav nav-pills" id="pills-tab" role="tablist" style={{ display: 'flex', justifyContent: 'center', position: 'sticky', marginTop:"10%", backgroundColor:"#f8f9fa", zIndex: 1000, width: '100%' }}>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
              </li>
            </ul>

            <div className="tab-content text-justify" id="pills-tabContent" style={{ marginTop: '50px', width: '100%' }}>
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <h1>My Story</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <h2>I Do Web Design & Development since I was 18 Years Old</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <table id="example" className="display" style={{ width: '80%' }}>
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>Skill</th>
                    </tr>
                  </thead>
                  <tbody className=' '>
                     
                    <tr style={{}}>
                      <td style={{border:"2px solid"  }}>C Sharp</td>
                    </tr>
                    <tr style={{}}>
                      <td style={{border:"2px solid"  }}>React</td>
                    </tr>
                    <tr style={{}}>
                      <td style={{border:"2px solid"  }}>Node</td>
                    </tr>
                    <tr style={{}}>
                      <td style={{border:"2px solid" }}>Express js</td>
                    </tr>
                    <tr style={{}}>
                      <td style={{border:"2px solid"  }}>My Sql</td>
                    </tr>
                     
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div>
                  <h5>Art & Creative Director</h5>
                  <p>2014-2015 Google Inc.<br />A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div>
                  <h5>WordPress Developer</h5>
                  <p>2015-2017 Google Inc.<br />A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div>
                  <h5>UI/UX Designer</h5>
                  <p>2018-2020 Google Inc.<br />A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
