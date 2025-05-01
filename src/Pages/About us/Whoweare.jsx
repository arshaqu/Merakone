import React from 'react';
import BannerImg from '../../Assets/Aboutus/whoweareBann.jpg';
import Image1 from '../../Assets/Aboutus/Image1.png';
import Image2 from '../../Assets/Aboutus/Image2.png';

function Whoweare() {
  return (
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
      <div  className="max-w-7xl w-full md:flex md:justify-between md:items-center p-6">
        {/* Left Content */}
        <div className="w-full md:w-full  md:ml-[-20px] ">
          <h3 className="text-xl ml-3 md:ml-20 font-semibold montserrat">WHO WE ARE</h3>
          <h1
            className="text-6xl md:text-[5rem] md:ml-20"
            style={{ fontFamily: 'Against Regular, sans-serif' }}
          >
            About
          </h1>
          <p className="mt-6 md:w-full md:mt-20 text-md md:text-xl montserrat md:mx-[70px]">
          At <strong className='text-blue-800'>Merakone</strong>, we transform visions into reality through exceptional interior fit-out
solutions across Saudi Arabia and Bahrain. Specializing in <strong>Luxury Retail, Retail, Food
and Beverages, Commercial Workplaces, and Residential</strong> sectors, we deliver
bespoke interiors that blend aesthetics, functionality, and innovation. Our
commitment to quality and precision ensures every project reflects our clients’
unique aspirations while meeting the highest industry standards.
          </p>
          <p className="mt-4 md:w-full text-md md:text-xl montserrat md:mx-[70px]">
          A cornerstone of our capability is our <strong>1,000 sq. meter state-of-the-art furniture and
          fittings factory in Riyadh</strong>. This well-equipped facility empowers us to craft custom
joinery solutions, offering unparalleled flexibility and control to meet our clients’
specific requirements. From intricate luxury retail displays to ergonomic commercial
workspaces, our in-house manufacturing ensures seamless execution and timely
delivery.
          </p>
          <p className="mt-4 md:w-full text-md md:text-xl montserrat md:mx-[70px]">
          With a client-centric approach, we pride ourselves on building lasting partnerships
founded on trust, reliability, and excellence. Whether it’s creating vibrant food and
beverage spaces, sophisticated residential interiors, or dynamic retail environments,
Merakone is your trusted partner in shaping spaces that inspire.
delivery.
          </p>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-auto flex flex-col items-start mt-10  gap-4">
  <img
    src={Image1}
    alt="Interior Design 1"
    loading="lazy"
    className="w-full md:w-[850px] h-auto md:ml-48 rounded-lg shadow-lg"
  />
  <img
    src={Image2}
    alt="Interior Design 2"
    loading="lazy"
    className="w-full md:w-[650px] h-auto md:ml-48 rounded-lg shadow-lg"
  />
</div>
      </div>
    </div>
  );
}

export default Whoweare;