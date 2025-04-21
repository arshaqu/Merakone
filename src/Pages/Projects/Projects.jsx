import React, { useEffect, useState } from 'react'
import Asset1 from '../../Assets/Projects/Asset1.png'
import Asset2 from '../../Assets/Projects/Asset2.png'
import Asset3 from '../../Assets/Projects/Asset3.png'
import Asset4 from '../../Assets/Projects/Asset4.png'
import Asset5 from '../../Assets/Projects/Asset5.png'
import Asset6 from '../../Assets/Projects/Asset6.png'
import Asset7 from '../../Assets/Projects/Asset7.png'
import Asset8 from '../../Assets/Projects/Asset8.png'
import Asset9 from '../../Assets/Projects/Asset9.png'
import Asset10 from '../../Assets/Projects/Asset10.png'
import Asset11 from '../../Assets/Projects/Asset11.png'
import Asset12 from '../../Assets/Projects/Asset12.png'
import Asset13 from '../../Assets/Projects/Asset13.png'
import Asset14 from '../../Assets/Projects/Asset14.png'
import Asset15 from '../../Assets/Projects/Asset15.png'
import Asset16 from '../../Assets/Projects/Asset16.png'
import Asset17 from '../../Assets/Projects/Asset17.png'
import Asset18 from '../../Assets/Projects/Asset18.png'
import Asset19 from '../../Assets/Projects/Asset19.png'
import Asset20 from '../../Assets/Projects/Asset20.png'
import ProjectBg from '../../Assets/Projects/ProjectBg.jpg'
import Bg from '../../Assets/Projects/bg.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './Project.css'
import { useNavigate } from 'react-router-dom'




const projectItems = [
    { image: Asset1, title: "RESERVED RIYADH GALLERY MALL RIYADH"    ,path:"/projects_reserved" },
    { image: Asset2, title: "PAUL @ PANORAMA MALL RIYADH"   ,path: "/projects_paul"},
    { image: Asset3, title: "AL HUSSAINI KADI MALL JIZAN"    ,path: "/al_hussaini_jizan" },
    { image: Asset4, title: "INTIMISSIMI PANORAMA MALL RIYADH"  ,path: "/intimissimi" },
    { image: Asset5, title: "GISSAH PERFUME AL HASA MALL"   ,path: "/gissah"},
    { image: Asset6, title: "KIKO MILANO"   ,path: "/kiko_milano" },
    { image: Asset7, title: "AL HUSSAINI LAVANDA PARK ABHA"    ,path:'/alhussaini_lavanda' },
    { image: Asset8, title: "BRAND FOR LESS PARK AVENUE PARK"    ,path:'/brand_for_less' },
    { image: Asset9, title: "BINGHATTI OFFICE-RIYADH"  , path:'/binghatti'},
    { image: Asset10, title: "JAWHARA JWELLERY PARK AVENUE RIYADH" ,path:'/jawhara' },
    { image: Asset11, title: "DAISO JAPAN SALAM MALL, JEDDAH" ,path :'/daiso' },
    { image: Asset12, title: "60 SEC AMWAJ MALL AKHOBAR" },
    { image: Asset13, title: "KIKO LAVANDA PARK ABHA" },
    { image: Asset14, title: "KIKO KINGDOM CENTER RIYADH" },
    { image: Asset15, title: "SUN GLASS HUT" },
    { image: Asset16, title: "SUNCLASS HUT PANORAMA MALL RIYADH" },
    { image: Asset17, title: "PAUL LE CAFE RIYADH GALLERY MALL" },
    { image: Asset18, title: "KIKO RIYADH GALLE" },
    { image: Asset19, title: "OUR UPCOMING PROJECT ON WORKING" },
    { image: Asset20, title: "OUR UPCOMING PROJECT ON WORKING" },
  ];

  

  function Projects() {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);
    
    useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
      
      projectItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, 150 * index + 500); // Start after banner animation with staggered delays
      });
      window.scrollTo(0, 0);

    }, []);
    
    
    const handleItemClick = (item) => {
      if (item.path) {
        navigate(item.path);
      }
    }

    return (
      <div className="projects-container">
        <div className="relative z-50">
          <Navbar />
        </div>
  
        <div
          className={`w-full h-[500px] flex flex-col items-center justify-center text-center relative banner-section ${isLoaded ? 'fade-in' : ''}`}
          style={{
            backgroundImage: `url(${ProjectBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
  
          <div className={`relative z-10 max-w-8xl banner-content ${isLoaded ? 'slide-up' : ''}`}>
            <h1
              className="text-5xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
              style={{ fontFamily: 'Against Regular, serif' }}
            >
              PROJECTS
            </h1>
            <p className="uppercase text-xs md:text-lg md:tracking-[7px] tracking-[4px] text-blue-500 font-bold md:mt-5 p-2 md:p-4 mb-6 montserrat">
                Home &gt; PROJECTS
              </p>
            <p className="text-[#2d3680] md:w-full text-lg md:text-xl montserrat">
              We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
              feel free to reach out and connect with our team.
            </p>
          </div>
        </div>
  
        <div
          className="w-full h-full flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundImage:
                'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
            }}
          >
            <div className="w-full max-w-8xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-16">
              {projectItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`relative overflow-hidden group project-item ${visibleItems.includes(index) ? 'fade-in-up' : 'invisible'} cursor-pointer`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="relative w-auto max-w-auto md:h-auto md:auto md:ml-12 p-5 overflow-hidden">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt="Custom Furniture"
                        className="w-full h-full project-image transition-transform duration-600 group-hover:scale-105"
                        loading='lazy'
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-0 transition-opacity mt-[-5px] ml-[-6px] rounded-lg duration-150"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-12 text-start z-10">
                      <h3 className="text-white w-[75%] text-2xl font-semibold mb-5 font-serif tracking-wide against project-title">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className={`footer-section ${isLoaded ? 'fade-in' : ''}`} style={{ animationDelay: '1s' }}>
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Projects;