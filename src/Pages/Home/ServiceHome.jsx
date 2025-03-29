import React from 'react';
import BannerImg from '../../Assets/Homepage/Asset 9.jpg';
import Image1 from '../../Assets/Homepage/Asset 5.png'
import Image2 from '../../Assets/Homepage/Asset 6.png';
import Image3 from '../../Assets/Homepage/Asset 7.png';
import Image4 from '../../Assets/Homepage/Asset 8.png';

function ServiceHome() {
  return (
    <div className="text-start py-12">
      <h2 style={{color:"#2d3680"}} className="text-6xl font-bold mb-4 md:ml-[200px] md:mt-[50px] against">Our Services</h2>
      <p style={{color:"#2d3680"}} className="text-xl  md:mt-[40px]  md:ml-[190px] md:mr-[230px] montserrat md:w-[1000px]">
        At Merakone Interiors, we specialize in delivering top-quality interior solutions tailored to meet the unique needs of our clients. From conceptualization to execution, we ensure seamless and innovative solutions across various industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="">
          <img src={Image1} alt="Turnkey Fit-Out Solutions " className=" rounded-lg w-3/4 md:ml-[130px]" />
        </div>
        <div className="">
          <img src={Image2} alt="Custom Furniture & Fittings Production" className="]  rounded-lg w-3/4 md:ml-[-50px]" />
        </div>
        <div className="">
          <img src={Image3} alt="Office Design & Build" className="rounded-lg md:mt-[-40px] w-3/4 md:ml-[130px]" />
        </div>
        <div className="">
          <img src={Image4} alt="Post-Opening Support" className="  rounded-lg md:mt-[-40px] w-3/4  md:ml-[-50px]" />
        </div>
      </div>
    <div className='flex justify-center'>
    <button style={{backgroundColor:'#2d3680'}} className="mt-8  text-white py-2 px-6 rounded-full">
        LEARN MORE
      </button>
    </div>
    </div>
  );
}

export default ServiceHome;
