import React, { Suspense, lazy } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutaBan from '../../Assets/Aboutus/AboutusBanner.png';
import VisionMission from './VisionMission';

const Whoweare = lazy(() => import('./Whoweare'));
const Ourstory = lazy(() => import('./Ourstory'));
const WhatDriveUs = lazy(() => import('./WhatDriveUs'));

function Aboutus() {
  return (
    <div>
      <Navbar />
      <div
        className='h-auto'
        style={{
          backgroundImage: `url(${AboutaBan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div className='md:mt-48'>
          <h1 className='md:text-[60px] text-[30px] against' style={{ color: '#2d3680' }}>
            About Us
          </h1>
          <h2
            className='text-blue-600 montserrat text-[1px] md:text-[10px] mb-5'
            style={{
              marginBottom: '5rem',
              letterSpacing: '6px',
              fontWeight: 400,
            }}
          >
            HOME &gt; ABOUT US
          </h2>
        </div>
      </div>

      {/* Lazy loaded components wrapped in Suspense */}
      <Suspense fallback={<div className="text-center my-10">Loading...</div>}>
        <Whoweare />
        <Ourstory />
        <WhatDriveUs />
        </Suspense>
        <VisionMission/>    
      <Footer />
    </div>
  );
}

export default Aboutus;
