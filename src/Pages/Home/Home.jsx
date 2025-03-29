import React from 'react';
import Navbar from '../../Components/Navbar';
import BannerImg from '../../Assets/Homepage/Asset2.png';
import Aboutus from './Aboutus';

function Home() {
  return (
    <div>
      <Navbar />
      <div
      className='h-screen '
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div className='md:mt-24'>
          <h2 className='text-blue-500 montserrat text-[10px] md:text-[18px]' style={{  marginBottom: '1rem', letterSpacing: '8px' }}>
            INTERIOR DESIGN AND ARCHITECTURE
          </h2>
          <h1 className='against md:text-[60px] text-[30px] '  style={{ marginBottom: '2rem', color: '#2d3680' }}>
            "Crafting spaces,<br/> creating experiences."
          </h1>
          <button
          className='absolute md:mt-24'
            style={{
              marginLeft: '-8%',
              backgroundColor: '#2d3680',
              color: '#fff',
              padding: '0.5rem 2rem',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            EXPLORE
          </button>
        </div>
      </div>
      <Aboutus/>
    </div>
  );
}

export default Home;
