import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '.././Css/Navbar.css';
import Image1 from '../../Assets/Homepage/Project2.png';
import Image2 from '../../Assets/Homepage/Project4.png';
import Image3 from '../../Assets/Homepage/Project5.png';
import Image4 from '../../Assets/Homepage/Project6.png';
import Image5 from '../../Assets/Homepage/Project7.png';

function HomeProject() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="rounded-full h-16 w-16 border-t-4 border-white border-solid animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="text-center py-12 bg-[#474e92] text-white md:mt-0" data-aos="fade-up">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-5 against" data-aos="fade-down">
        Projects
      </h2>

      <p className="text-lg p-4 md:text-2xl mb-12 montserrat md:mt-5 md:p-12" data-aos="fade-up" data-aos-delay="200">
        We believe in turning ideas into reality through innovation and precision. Our portfolio showcases a diverse range of projects, from dynamic web applications to seamless user experiences.
      </p>

      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 1 */}
            <div className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transition duration-300 hover:shadow-2xl" data-aos="zoom-in">
              <img src={Image1} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                AL - HUSSAINI KADI MALL JIZAN
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transition duration-300 hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
              <img src={Image2} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                PAUL LE CAFE RIYADH GALLERY MALL RIYADH
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative mt-2 rounded-lg overflow-hidden transition duration-300 hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="400">
            <img src={Image3} alt="" className="w-full h-[600px] object-cover rounded-lg" />
            <div className="absolute md:bottom-3 bottom-1 w-full bg-black hover:bg-opacity-90 hover:bg-[#474e92] bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
              RESERVED RIYADH GALERY MALL
            </div>
          </div>

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 4 */}
            <div className="relative rounded-lg overflow-hidden w-full h-[300px] transition duration-300 hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="600">
              <img src={Image4} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                INTIMISSIMI PANORAMA MALL RIYADH
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transition duration-300 hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="800">
              <img src={Image5} alt="" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                AL-HUSSAINI LAVANDA ABHA
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Button */}
      <div className="mt-8" data-aos="fade-up" data-aos-delay="1000">
        <a href="/projects">
          <button className="px-6 py-2 bg-white text-[#474e92] text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition montserrat">
            VIEW ALL PROJECTS
          </button>
        </a>
      </div>
    </div>
  );
}

export default HomeProject;
