import React from 'react'
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




const projectItems = [
    { image: Asset1, title: "RESERVED RIYADH GALLERY MALL RIYADH" },
    { image: Asset2, title: "PAUL @ PANORAMA MALL RIYADH" },
    { image: Asset3, title: "AL HUSSAINI KADI MALL JIZAN" },
    { image: Asset4, title: "INTIMISSIMI PANORAMA MALL RIYADH" },
    { image: Asset5, title: "QISSA PERFUME AL HASA MALL" },
    { image: Asset6, title: "KIKO MILANO" },
    { image: Asset7, title: "AL HUSSAINI LAVANDA PARK ABHA" },
    { image: Asset8, title: "BRAND FOR LESS PARK AVENUE PARK" },
    { image: Asset9, title: "BINGHATTI OFFICE-RIYADH" },
    { image: Asset10, title: "JAWHARA JWELLERY PARK AVENUE RIYADH" },
    { image: Asset11, title: "DAISO JAPAN SALAM MALL, JEDDAH" },
    { image: Asset12, title: "60 SEC AMWAJ MALL AKHOBAR" },
    { image: Asset13, title: "KIKO LAVANDA PARK ABHA" },
    { image: Asset14, title: "KIKO KINGDOM CENTER RIYADH" },
    { image: Asset15, title: "SUN GLASS HUT" },
    { image: Asset16, title: "SUNCLASS HUT PANORAMA MALL RIYADH" },
    { image: Asset17, title: "PAUL LE CAFE RIYADH GALLERY MALL" },
    { image: Asset18, title: "KIKO RIYADH GALLE" },
    { image: Asset19, title: "PROJECT 19" },
    { image: Asset20, title: "PROJECT 20" },
  ];

  


function Projects() {
  return (
    <div>
        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>
  
        {/* Banner */}
        <div
          className="w-full h-[500px] flex flex-col items-center justify-center text-center relative px-"
          style={{
            backgroundImage: `url(${ProjectBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
  
          <div className="relative z-10 max-w-8xl" data-aos="">
            <h1
              className="text-5xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
              style={{ fontFamily: 'Against Regular, serif' }}
            >
              PROJECTS
            </h1>
            <p className="uppercase md:tracking-[7px] text-blue-500 font-semibold md:mt-5 p-4 mb-6">
              Home &gt; PROJECTS &gt; COMPLETED
            </p>
            <p className="text-[#2d3680] md:w-full text-lg md:text-xl montserrat">
              We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
              feel free to reach out and connect with our team.
            </p>
          </div>
        </div>
        <div
          className="w-full h-full flex flex-col items-center justify-center text-center relative "
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <div
            style={{
                width:'100%',
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))',
              }}>
           
           
           
           
           <div className="w-full max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
  {projectItems.map((item, index) => (
    <div key={index} className="relative overflow-hidden ">
      
      {/* Title Above the Image */}

      {/* Image Below the Title */}
     <div className="relative w-auto max-w-auto md:h-auto md:auto md:ml-12 overflow-hidden ">
                                <img
                                    src={item.image}
                                    alt="Custom Furniture"
                                    className="w-full h-full  "
                                    loading='lazy'
                                />
                                <div className="absolute inset-0  flex flex-col justify-end p-12 text-start">
                                    <h3 className="text-white w-[85%] text-xl font-semibold mb-2 font-serif tracking-wide against">
                                        {item.title}
                                    </h3>
                                    
                                </div>
                            </div>
                            
    
    </div>
  ))}
</div>


            </div>
        </div>

        <Footer />
      </div>
  )
}

export default Projects
