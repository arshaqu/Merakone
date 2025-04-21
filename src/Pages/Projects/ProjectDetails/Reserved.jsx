import React, { useEffect } from 'react'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import PaulBg from '../../../Assets/Projects/Paul/PaulBg.jpg'
import Bg from '../../../Assets/Projects/Paul/Bg.png'
import LineBg from '../../../Assets/Projects/Paul/Bg.png'
import { CiLocationOn } from "react-icons/ci"
import { GiResize, GiShop } from "react-icons/gi"

import BgImg from '../../../Assets/Projects/Reserved/BgImg.JPG'
import Image1 from '../../../Assets/Projects/Reserved/Img1.JPG'
import Image2 from '../../../Assets/Projects/Reserved/Img2.JPG'
import Image3 from '../../../Assets/Projects/Reserved/Img3.JPG'
import Image4 from '../../../Assets/Projects/Reserved/Img4.JPG'
import Image5 from '../../../Assets/Projects/Reserved/Img5.JPG'
import Image6 from '../../../Assets/Projects/Reserved/Img6.JPG'
import Image7 from '../../../Assets/Projects/Reserved/Img7.JPG'




import AOS from 'aos'
import 'aos/dist/aos.css'

function Reserved() {
  useEffect(() => {
    AOS.init({
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
            RESERVED
          </h1>
          <p className="uppercase text-xs md:text-lg md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
          Home &gt; PROJECTS &gt; RESERVED
              </p>
        </div>
      </div>

      <div className="bg-[#2d3680] py-6 md:py-10 px-4 montserrat" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center text-white gap-y-8 md:gap-6">
          <div className="flex flex-col items-center relative" data-aos="zoom-in">
            <CiLocationOn className="w-12 h-12 md:w-24 md:h-20 mb-2" />
            <span className="bg-white text-[#2d3680] px-2 md:px-3 py-1 rounded-md text-sm md:text-lg font-medium mb-2 md:mb-3 mt-2 md:mt-3">
              Location
            </span>
            <p className="text-lg md:text-2xl">Riyadh</p>
          </div>

          <div className="hidden md:block h-32 w-px bg-white mx-12"></div>

          <div className="flex flex-col items-center relative" data-aos="zoom-in">
            <GiResize className="w-12 h-12 md:w-24 md:h-20 mb-2" />
            <span className="bg-white text-[#2d3680] px-4 md:px-7 py-1 rounded-md text-sm md:text-lg font-medium mb-2 md:mb-3 mt-2 md:mt-3">
              Size
            </span>
            <p className="text-lg md:text-2xl">2500 Sq,Ft</p>
          </div>

          <div className="hidden md:block h-32 w-px bg-white mx-12"></div>

          <div className="flex flex-col items-center relative" data-aos="zoom-in">
            <GiShop className="w-12 h-12 md:w-24 md:h-20 mb-2 " />
            <span className="bg-white text-[#2d3680] px-4 md:px-7 py-0 rounded-md text-sm md:text-lg font-medium mb-2 md:mb-3 mt-2 md:mt-3 ">
              Sector
            </span>
            <p className="text-lg md:text-2xl">Paul Le Cafe</p>
          </div>

          <div className="hidden md:block h-32 w-px bg-white mx-12"></div>

          <div className="flex flex-col items-center relative" data-aos="zoom-in">
            <IoCheckmarkDoneCircleOutline className="w-12 h-12 md:w-24 md:h-20 mb-2" />
            <span className="bg-white text-[#2d3680] px-4 md:px-7 py-0 rounded-md text-sm md:text-lg font-medium mb-2 md:mb-3 mt-2 md:mt-3">
              Completed
            </span>
            <p className="text-lg md:text-2xl">2024</p>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        data-aos="fade-up"
      ></div>

      <div
        className="w-full h-full flex flex-col items-center justify-center text-center relative"
        style={{
          backgroundImage: `url(${LineBg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
      >

<div className="relative">
  {/* Dark Blue Rounded Block on right */}
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-[496px] bg-blue-900 rounded-xl z-0"></div>

  {/* Featured image with hover effect */}
  <div
    className="relative z-10 max-w-6xl mx-auto md:ml-40 px-4 md:mt-28 mt-12 md:mb-28"
    data-aos="zoom-in-up"
    data-aos-delay="300"
  >
<div className="relative md:w-[700px] w-auto rounded-3xl group overflow-hidden rounded-5xl transition-transform duration-700 ease-in-out hover:scale-[1.02] hover:rotate-[1.0deg] hover:shadow-[0_10px_30px_rgba(0,0,0,0.80)] bg-transparent">
  {/* Black overlay with opacity 20% */}
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none"></div>
  
  <img
    src={BgImg}
    alt="Cafe counter with modern design"
    className="md:w-[700px] w-full h-auto rounded-3xl relative z-20"
  />
</div>

  </div>

  {/* Dark Blue Rounded Block on left */}
  <div className="absolute left-0 top-1/2 mt-12 w-96 h-[496px] bg-blue-900 rounded-xl z-0"></div>

  {/* First row of images */}
  <div className="p-8 max-w-7xl mx-auto" data-aos="fade-up">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image1} alt="Mall cafe seating area" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image2} alt="Close-up seating" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image3} alt="Paul cafe seating" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
    
    {/* Panoramic image */}
    <div className="mt-4 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
        <img src={Image4} alt="Panoramic view" className="w-full h-80 sm:h-96 object-cover transition-all duration-300" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </div>
  </div>

  {/* Second row of images */}
  <div className="max-w-7xl md:mt-[-12px] mx-auto pb-8" data-aos="fade-up">
    <div className="flex flex-col md:flex-row gap-4 px-8">
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image5} alt="Mall cafe seating area" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image7} alt="Close-up seating" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden rounded-lg group" data-aos="zoom-in-up">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105">
          <img src={Image6} alt="Paul cafe seating" className="w-full h-80 object-cover transition-all duration-300" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</div>


        
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
  {/* Previous Project */}
 <a href="/projects_paul">
 <div className="text-center md:text-left mb-10 md:mb-0">
    <p className="text-xs tracking-widest text-orange-500 hover:text-gray-900 uppercase mb-1">Previous Project</p>
    <h2 className="text-xl font-serif text-black hover:text-orange-500 transition-colors duration-300 cursor-pointer">
    PAUL LE CAFE
    </h2>
  </div>
 </a>

  {/* Vertical Divider */}
  <div className="hidden md:block h-14 border-l border-orange-300 mx-10" />

  {/* Next Project */}
  <a href="/projects_paul">
  <div  className="text-center md:text-right">
    <p className="text-xs tracking-widest text-blue-500 hover:text-gray-900 uppercase mb-1">Next Project</p>
    <h2 className="text-xl font-serif text-black hover:text-blue-600 transition-colors duration-300 cursor-pointer">
    KIKO RIYADH GALLE
    </h2>
  </div>
  </a>
</div>



      <div className='h-2 w-full bg-blue-900'></div>

      <Footer />
    </div>
  )
}

export default Reserved
