import React from 'react'
import BannerImg from '../../Assets/Aboutus/MissionBann.jpg'
import Image1 from '../../Assets/Aboutus/Missionside.png'
import AboutBg from '../../Assets/Aboutus/IntegrityBann.jpg'


function VisionMission() {
 return (
    <div>
         <div
       className="w-full h-auto flex flex-col justify-center items-center px- py-20 relative"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#fff",
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
     >
       <div  className="max-w-7xl w-full md:flex md:justify-between md:items-center">
         {/* Left Content */}
         <div style={{color: "#2d3680"}} className="w-full md:w-full  md:ml-[-20px] ">
           <h1
             className="text-5xl md:m-12 md:text-[3.5rem] md:ml-20"
             style={{ fontFamily: 'Against Regular, sans-serif' }}
           >
             Vision
           </h1>
           <p className=" md:w-full mt-7 text-lg md:text-xl montserrat md:mx-[70px]">
           At Merakone Interiors, Our vision is to be the leading provider of innovative and high-quality turnkey interior 
           and fit-out solutions across Saudi Arabia and Baharain. We aim to redefine interior spaces with creativity, 
           functionality, and excellence.
           </p>
           <h1
             className="text-5xl md:text-[3.5rem] md:ml-20 md:m-12"
             style={{ fontFamily: 'Against Regular, sans-serif' }}
           >
             Mission
           </h1>
           <p className="mt-4 md:w-full text-lg md:text-xl montserrat md:mx-[70px]">
            Our mission is to enhance the living and working enviournments of our clients by providing world-class interior
            solutions. We strive for excellence, ensuring every project meets the highest industry standard in quality , safety, and functionality
           </p>
         </div>
 
         {/* Right Images */}
         <div className="w-full md:w-auto flex flex-col items-start mt-10  gap-4">
  
   <img
     src={Image1}
     alt="Interior Design 2"
     loading="lazy"
     className="w-full md:w-[850px] h-auto md:ml-80 rounded-lg shadow-lg"
   />
 </div>
       </div>
  
     </div>

     <div
className="w-full h-auto md:p-24 flex items-center justify-center px-8 md:px-20 relative"
style={{
  backgroundImage: `url(${AboutBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
>
{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-60"></div>

{/* Text Content */}
<div className="relative z-10 max-w-4xl text-white montserrat">
  <h1 className="text-5xl md:text-6xl font-semibold mb-8 against">About Us</h1>
  <p className="text-lg md:text-xl  ">
    Integrity – We uphold honesty, transparency, and strong ethical standards in every project.
  </p>
  <p className="text-lg md:text-xl ">
    Commitment to Excellence – We aim for perfection in design, execution, and customer service.
  </p>
  <p className="text-lg md:text-xl ">
    Customer-Centric Approach – Our clients’ needs and satisfaction are at the heart of everything we do.
  </p>
  <p className="text-lg md:text-xl">
    Sustainability – We embrace eco-friendly practices to ensure long-term sustainability.
  </p>
</div>
</div>



    </div>
   );
 }
 

export default VisionMission



