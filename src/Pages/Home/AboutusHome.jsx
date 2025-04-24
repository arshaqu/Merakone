import React from 'react';
import BannerImg from '../../Assets/Homepage/BannerAbout.png';
import Image1 from '../../Assets/Homepage/Asset3.png';



function Aboutus() {
  return (
    <div className='md:h-screen h-auto' style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      backgroundImage: `url(${BannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative', // Add relative positioning
    }}>
      <div className='md:flex md:justify-between md:items-center w-full'>
        <div className='w-full md:w-1/2 md:pr-8  md:ml-[158px]'>
          <h1 className='md:ml-20 mt-12' style={{ fontSize: '4rem', fontFamily: 'Against Regular, sans-serif' }}>About Us</h1>
          <p className='md:mt-20 mt-10 md:text-xl montserrat md:ml-[70px] md:mr-[70px]' style={{ marginBottom: '1rem' }}>
            Merakone Interiors is a premier turnkey interior fit-out and contracting company specializing in high-end commercial, retail, hospitality, and residential projects. With a strong presence in <strong className='font-bold'>Saudi Arabia and Bahrain</strong>, we provide end-to-end solutions, from conceptualization to execution, ensuring a seamless and stress-free experience for our clients.
          </p>
          <p className='md:text-xl montserrat md:ml-[70px] md:mr-[70px]' style={{ marginBottom: '2rem' }}>
            Our expertise extends beyond design—we are a team of well-qualified civil, architectural, and electro-mechanical professionals committed to delivering excellence. With a fully equipped 1000 sq. meter furniture and fittings factory in Riyadh, we manufacture custom joinery, metalwork, and bespoke furniture to cater to diverse project needs.
          </p>
          <button className='mt-24 ml-24' style={{
            backgroundColor: '#2d3680',
            color: '#fff',
            padding: '0.5rem 2rem',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}>
            LEARN MORE
          </button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
          <img src={Image1} alt="Interior Design" style={{ width: '100%', borderRadius: '15px' }} />
        </div>
      </div>
      <div className="against bg-white/20 text-white flex flex-wrap justify-around items-center rounded-lg p-4 bottom-12 right-28 w-full md:w-auto h-auto md:flex-nowrap md:space-x-6">
          <div className="flex flex-col items-center md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">10</h2>
            <p className="text-md md:text-lg text-center md:text-left">Years<br /> working</p>
          </div>
          
          <div className="w-full md:w-[1px] bg-white h-10 hidden md:block"></div>
  
          <div className="flex flex-col items-center md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">07</h2>
            <p className="text-md md:text-lg text-center md:text-left">Talented<br /> managers</p>
          </div>
  
          <div className="w-full md:w-[1px] bg-white h-10 hidden md:block"></div>
  
          <div className="flex flex-col items-center md:flex-row md:text-left md:space-x-3 m-2">
            <h2 className="text-3xl md:text-5xl font-bold">100</h2>
            <p className="text-md md:text-lg text-center md:text-left">Completed<br /> projects</p>
          </div>
        </div>
      
      </div>

  );
}

export default Aboutus;
