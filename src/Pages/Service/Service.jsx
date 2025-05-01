import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Loader from '../Components/Loader';

import ServicesBg from '../../Assets/Services/ServicesBann.png';
import Image1 from '../../Assets/Services/Image1.png';
import Image2 from '../../Assets/Services/Image2.png';
import Image3 from '../../Assets/Services/Image3.png';
import Image4 from '../../Assets/Services/Image4.png';
import EndBan from '../../Assets/Services/EndtoEndBan.png';
import Ourworks from './Ourworks';
import Bgline from '../../Assets/Services/BgLine.png';
import Bgimg from '../../Assets/Services/BgImg.png';

function Service() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loader */}
      <Loader fadeOut={!loading} />

      {/* Main Content */}
      {!loading && (
        <>
          <div className="relative z-50">
            <Navbar />
          </div>

          {/* Banner */}
          <div
            className="w-full h-[500px] flex flex-col items-center justify-center text-center relative px-4"
            style={{
              backgroundImage: `url(${ServicesBg})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
            <div className="relative z-10 max-w-8xl" data-aos="fade-down">
              <h1 className="text-5xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4" style={{ fontFamily: 'Against Regular, serif' }}>
                Services
              </h1>
              <p className="uppercase tracking-[7px] text-blue-500 font-semibold md:mt-5 mb-6">Home &gt; Service</p>
              <p className="text-[#2d3680] md:w-full text-lg md:text-xl montserrat">
                At Merakone Interiors, we specialize in delivering top-quality interior solutions tailored to meet the unique needs of our clients.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="relative z-10 max-w-full bg-gradient-to-b from-[#dcdcdc] to-[#e0dcdc] px-4 py-16 md:px-48">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2d3680] mb-4 text-center" style={{ fontFamily: 'Against Regular, serif' }} data-aos="fade-up">
              What We Offer
            </h1>
            <p className="text-[#2d3680] text-lg md:text-xl montserrat text-center mb-10" data-aos="fade-up" data-aos-delay="200">
            At <strong className='text-blue-700'>Merakone</strong>, we offer comprehensive interior fit-out solutions tailored to meet the
diverse needs of our clients in Saudi Arabia and Bahrain. Our expertise spans the
following key service areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {/* Card 1 */}
              <div className="relative w-auto max-w-auto md:h-[450px] overflow-hidden" data-aos="zoom-in">
                <img src={Image1} alt="Turnkey Fit-Out" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-center">
                  <h3 className="text-white text-xl mb-2 font-serif tracking-wide">TURNKEY FIT-OUT </h3>
                  <p className="text-white text-sm md:text-lg montserrat">Delivering end-to-end interior fit-out solutions, from concept to completion,
                  ensuring seamless project execution.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative w-auto max-w-auto md:h-[450px] overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
                <img src={Image2} alt="Custom Furniture" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-center">
                  <h3 className="text-white text-xl font-semibold mb-2 font-serif tracking-wide against">FURNITURE AND FITTINGS PRODUCTION</h3>
                  <p className="text-white text-sm md:text-lg montserrat">Crafting bespoke furniture and joinery at our 1,000 sq. meter Riyadh factory to
                  meet unique client specifications.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative w-auto max-w-auto md:h-[450px] overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                <img src={Image3} alt="Office Design" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-center">
                  <h3 className="text-white text-xl mb-2 font-serif tracking-wide">OFFICES & RESIDENCES</h3>
                  <p className="text-white text-sm md:text-lg">Creating functional and inspiring commercial workspaces and residences.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative w-auto max-w-auto md:h-[450px] overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
                <img src={Image4} alt="Post Opening" className="w-full h-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-center">
                  <h3 className="text-white text-xl font-semibold mb-2 font-serif tracking-wide against">POST-SHOP OPENING SERVICES</h3>
                  <p className="text-white text-sm md:text-lg montserrat">Providing ongoing support and maintenance to ensure retail spaces remain vibrant
                  and operational.</p>
                </div>
              </div>
            </div>

            {/* End-to-End Banner */}
            <div style={{ backgroundImage: `url(${Bgline})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', position: 'relative' }} className="py-8 md:py-16 mt-16" data-aos="fade-up">
              <div className="relative w-full md:h-auto overflow-hidden mb-8 md:mb-12 hidden md:block">
                <img src={EndBan} alt="End to End Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                  <h3 className="text-white text-3xl md:text-5xl font-semibold mb-4 font-serif tracking-wide against">End-to-End Interior Solution</h3>
                  <p className="text-white text-lg md:text-2xl montserrat">From concept to execution, we handle everything.</p>
                </div>
              </div>

              <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="300">
                <Ourworks />
              </div>
            </div>
          </div>

          {/* Final Banner */}
          <div className="relative w-full h-[600px] overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Bgimg})`, filter: 'brightness(0.7)' }}></div>
            <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
              <div className="w-full md:w-2/2 m-5 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 against" style={{ lineHeight: '1.1' }}>
                  Where design<br />meets functionality
                </h1>
                <p className="text-base md:text-lg font-light max-w-md montserrat">
                  At Merakone, we take pride in delivering excellence with a commitment to quality, innovation, and client satisfaction.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default Service;
