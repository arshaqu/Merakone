import React from 'react';
import BgImg from '../../Assets/Homepage/BannerS.png';
import Image1 from '../../Assets/Homepage/Asset 5.png'
import Image2 from '../../Assets/Homepage/Asset 6.png';
import Image3 from '../../Assets/Homepage/Asset 7.png';
import Image4 from '../../Assets/Homepage/Asset 8.png';


function ServiceHome() {
  return (
    <div className='md:h-auto h-auto' style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         padding: '2rem',
         backgroundColor: '#1a1a1a',
         color: '#fff',
         backgroundImage: `url(${BgImg})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         position: 'relative', // Add relative positioning
       }}>
      <h2  style={{color:"#2d3680" }} className="text-4xl md:text-6xl  font-bold mb-4 mt-12 md:mt-[50px] against">Our Services</h2>
      <p style={{color:"#2d3680"}} className="text-xl mt-10 md:mt-[40px]  md:ml-[190px] md:mr-[230px] montserrat md:w-[1000px]">
        At Merakone Interiors, we specialize in delivering top-quality interior solutions tailored to meet the unique needs of our clients. From conceptualization to execution, we ensure seamless and innovative solutions across various industries.
      </p>



      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
  {/* Card 1 */}
  <div className="relative w-full h-auto md:p-24     object-cover 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:brightness-75 
    hover:shadow-sm">
    <img 
      src={Image1} 
      alt="Turnkey Fit-Out Solutions" 
      className="    rounded-lg 
    w-full 
    h-full 

  rounded-lg w-full h-full object-cover" 
    />
    <p className="absolute inset-0 flex items-center justify-center text-lg mt-36 md:mt-[280px] p-8 md:text-4xl font-semibold text-white against text-center">
      Custom furniture and fit out solutions
    </p>
  </div>

  {/* Card 2 */}
  <div className="relative w-full h-auto md:p-24 object-cover 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:brightness-75 
    hover:shadow-sm">
    <img 
      src={Image2} 
      alt="Turnkey Fit-Out Solutions" 
      className="    rounded-lg 
    w-full 
    h-full 
  rounded-lg w-full h-full object-cover" 
    />
    <p className="absolute inset-0 flex items-center justify-center text-lg mt-36 md:mt-[280px] md:text-4xl font-semibold text-white against text-center">
      Turkey Fit-Out Solutions
    </p>
  </div>

  {/* Card 3 */}
  <div className="relative w-full h-auto md:p-24 object-cover 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:brightness-75 
    hover:shadow-sm">
    <img 
      src={Image3} 
      alt="Post-Opening Support" 
      className="    rounded-lg 
    w-full 
    h-full 

  rounded-lg w-full h-full object-cover" 
    />
    <p className="absolute inset-0 flex items-center justify-center text-md mt-24 md:mt-[280px] md:text-4xl p-24 font-semibold text-white against text-center">
      Post-Opening Support
    </p>
  </div>

  {/* Card 4 */}
  <div className="relative w-full h-auto md:p-24 rounded-xl    object-cover 
    transition 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-105 
    hover:brightness-5 
    hover:shadow-sm">
  <img 
  src={Image4} 
  alt="Office Design & Build" 
  className="
    rounded-lg 
    w-full 
    h-full 
 
  " 
/>
    <p className="absolute inset-0 flex items-center justify-center text-lg mt-36 md:mt-[280px] md:text-4xl font-semibold text-white against text-center ">
      Office Design & Build
    </p>
  </div>
</div>




    <div className='flex justify-center'>
  <a href="/services">
  <button style={{backgroundColor:'#2d3680'}} className="mt-8  text-white py-2 px-6 mb-12 rounded-full">
        LEARN MORE
      </button></a>
    </div>
    </div>
  );
}

export default ServiceHome;
