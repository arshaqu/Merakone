import React from 'react';
import Image1 from '../../Assets/Homepage/Project3.png';
import Image2 from '../../Assets/Homepage/Project4.png';
import Image3 from '../../Assets/Homepage/Project5.png';


function HomeProject() {
  return (
<div className="text-center py-12 bg-gray-900 text-white md:mt-0">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-5 against">Projects</h2>
      <p className="text-lg md:text-xl mb-12 montserrat md:mt-5">
        We believe in turning ideas into reality through innovation and precision. Our portfolio showcases a diverse range of projects, from dynamic web applications to seamless user experiences.
      </p>
      
      {/* Grid Layout */}
              <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
            {/* Column containing first two images */}
            <div className="flex flex-col items-center justify-center">
              {/* Card 1 */}
              <div className="relative rounded-lg overflow-hidden">
                <img src={Image1} alt="AL HUSSAINI KADI MALL JIZAN" className="w-full h-[300px] object-cover rounded-lg" />
              </div>
              
              {/* Card 2 */}
              <div className="relative rounded-lg overflow-hidden mt-5">
                <img src={Image2} alt="PAUL LE CAFE RIYADH GALLERY MALL RIYADH" className="w-full h-[300px] object-cover rounded-lg" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-lg overflow-hidden">
              <img src={Image3} alt="RESERVED RIYADH GALLERY MALL RIYADH" className="w-full h-[600px] object-cover rounded-lg" />
            </div>
            <div className="flex flex-col items-center justify-center">
              {/* Card 1 */}
              <div className="relative rounded-lg overflow-hidden">
                <img src={Image1} alt="AL HUSSAINI KADI MALL JIZAN" className="w-full h-[300px] object-cover rounded-lg" />
              </div>
              
              {/* Card 2 */}
              <div className="relative rounded-lg overflow-hidden mt-5">
                <img src={Image2} alt="PAUL LE CAFE RIYADH GALLERY MALL RIYADH" className="w-full h-[300px] object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>


      {/* Button */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition">
          View All Clients
        </button>
      </div>
    </div>
  );
}

export default HomeProject;
