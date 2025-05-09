import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import PaulBg from '../../../Assets/Projects/Paul/PaulBg.jpg'
import Bg from '../../../Assets/Projects/Paul/Bg.png'
import LineBg from '../../../Assets/Projects/Paul/Bg.png'
import { CiLocationOn } from "react-icons/ci"
import { GiResize, GiShop } from "react-icons/gi"
import { IoClose } from "react-icons/io5"

// Import only the 4 images we have
import Image1 from '../../../Assets/Projects/KikoMilano/Img1.jpg'
import Image2 from '../../../Assets/Projects/KikoMilano/Img2.jpg'
import Image3 from '../../../Assets/Projects/KikoMilano/Img3.jpg'
import Image4 from '../../../Assets/Projects/KikoMilano//Img4.jpg'

import Aos from 'aos'

function KikoMilano() {
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };


  const handleClosePopup = () => {
    setSelectedImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };


    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false,
        });
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <div className="projects-container">
          <div className="relative z-50">
            <Navbar />
          </div>

            {/* Image Popup */}
            {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4 transition-opacity duration-500 ease-in-out"
            onClick={handleClosePopup}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full rounded-lg overflow-hidden bg-white shadow-lg transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
              {/* Close Button with Hover Effect */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80 transition-all"
                onClick={handleClosePopup}
              >
                <IoClose className="w-6 h-6" />
              </button>

              {/* Image with Subtle Zoom Effect */}
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-[90vh] mx-auto object-contain rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
              />
            </div>
          </div>
        )}



          <div
            className="w-full h-[300px] md:h-[500px] flex flex-col items-center justify-center text-center relative banner-section"
            style={{
              backgroundImage: `url(${PaulBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            data-aos="fade-down"
          >
            <div className="bg-gradient-to-b from-white/70 to-white/90"></div>
            <div className="relative mt-[100px] md:mt-[150px] z-10 max-w-8xl px-4">
              <h1
                className="text-3xl sm:text-4xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
                style={{ fontFamily: 'Against Regular, serif' }}
              >
                KIKO MILANO
              </h1>
              <p className="uppercase text-xs md:text-lg md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
                Home &gt; PROJECTS &gt; KIKO MILANO
              </p>
            </div>
          </div>
    

          <div className="bg-[#2d3680] py-6 md:py-10 px-4 montserrat" data-aos="fade-up">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-6 text-white text-center">
    {/* Location */}
    <div className="flex flex-col items-center" data-aos="zoom-in">
      <CiLocationOn className="w-12 h-12 md:w-20 md:h-20 mb-2" />
      <span className="bg-white text-[#2d3680] px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
        Location
      </span>
      <p className="text-base md:text-xl">REDSEA MALL JEDDAH</p>
    </div>

    {/* Divider */}
    <div className="hidden md:flex h-32 w-px bg-white mx-4"></div>

    {/* Sector */}
    <div className="flex flex-col items-center" data-aos="zoom-in">
      <GiShop className="w-12 h-12 md:w-20 md:h-20 mb-2" />
      <span className="bg-white text-[#2d3680] px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
        Sector
      </span>
      <p className="text-base md:text-xl">KIKO MILANO</p>
    </div>

    {/* Divider */}
    <div className="hidden md:flex h-32 w-px bg-white mx-4"></div>

    {/* Completed */}
    <div className="flex flex-col items-center" data-aos="zoom-in">
      <IoCheckmarkDoneCircleOutline className="w-12 h-12 md:w-20 md:h-20 mb-2" />
      <span className="bg-white text-[#2d3680] px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 mt-2">
        Completed
      </span>
      <p className="text-base md:text-xl">Completed</p>
    </div>
  </div>

  {/* Description */}
  <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
    <p className="montserrat text-sm md:text-xl font-extrabold text-white tracking-wide leading-relaxed text-center bg-white mt-6 bg-clip-text text-transparent drop-shadow-lg against">
    COMPLETE INTERIOR FIT-OUT INCLUDING CIVIL, INTERIOR DECORATIONS,CIVIL & ELECTRO MECHANICAL WORKS
    </p>
  </div>
</div>


          {/* Gallery Section with 4 Images */}
          <div className="w-full relative py-16" 
               style={{
                 backgroundImage: `url(${LineBg})`,
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: '100% 100%',
               }}>
            
            {/* Blue accent blocks for visual interest */}
            <div className="absolute right-0 top-1/4 w-64 h-96 bg-blue-900 rounded-xl opacity-80 z-0"></div>
            <div className="absolute left-0 bottom-1/4 w-64 h-96 bg-blue-900 rounded-xl opacity-80 z-0"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              {/* Featured large image */}
              <div className="mb-12" data-aos="fade-up">
                <div onClick={() => handleImageClick(Image3)} className="overflow-hidden rounded-xl group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image3} 
                      alt="Gissah showcase" 
                      className="w-full h-96 md:h-[500px] object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Three image layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
                <div onClick={() => handleImageClick(Image1)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image1} 
                      alt="Gissah interior" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div onClick={() => handleImageClick(Image2)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image2} 
                      alt="Gissah display" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div onClick={() => handleImageClick(Image4)} className="overflow-hidden rounded-lg group">
                  <div className="relative overflow-hidden transition-transform duration-500 ease-in-out transform group-hover:scale-105">
                    <img 
                      src={Image4} 
                      alt="Gissah seating" 
                      className="w-full h-80 object-cover transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
            {/* Previous Project */}
            <a href="/daiso">
              <div className="text-center md:text-left mb-10 md:mb-0">
                <p className="text-xs tracking-widest text-orange-500 hover:text-gray-900 uppercase mb-1">Previous Project</p>
                <h2 className="text-xl font-serif text-black hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                DAISO JAPAN SALAM MALL
                </h2>
              </div>
            </a>
            
            {/* Vertical Divider */}
            <div className="hidden md:block h-14 border-l border-orange-300 mx-10" />
            
            {/* Next Project */}
            <a href="/alhussaini_lavanda">
              <div className="text-center md:text-right">
                <p className="text-xs tracking-widest text-blue-500 hover:text-gray-900 uppercase mb-1">Next Project</p>
                <h2 className="text-xl font-serif text-black hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                AL HUSSAINI LAVANDA
                </h2>
              </div>
            </a>
          </div>
    
          <div className='h-2 w-full bg-blue-900'></div>
    
          <Footer />
        </div>
      )
    }

export default KikoMilano
