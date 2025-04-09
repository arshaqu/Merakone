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
      <div  className="max-w-7xl w-full md:flex md:justify-between md:items-center">
        {/* Left Content */}
        <div className="w-full md:w-full  md:ml-[-20px] ">
          <h3 className="text-xl md:ml-20 font-semibold montserrat">WHO WE ARE</h3>
          <h1
            className="text-5xl md:text-[5rem] md:ml-20"
            style={{ fontFamily: 'Against Regular, sans-serif' }}
          >
            About
          </h1>
          <p className="mt-6 md:w-full md:mt-20 text-lg md:text-xl montserrat md:mx-[70px]">
            Merakone Interiors is a premier turnkey interior fit-out and contracting company
            specializing in high-end commercial, retail, hospitality, and residential projects.
            With a strong presence in <strong className="font-bold">Saudi Arabia and Bahrain</strong>,
            we provide end-to-end solutions, from conceptualization to execution, ensuring a seamless
            and stress-free experience for our clients.
          </p>
          <p className="mt-4 md:w-full text-lg md:text-xl montserrat md:mx-[70px]">
            Our expertise extends beyond design—we are a team of well-qualified civil, architectural,
            and electro-mechanical professionals committed to delivering excellence. With a fully
            equipped 1000 sq. meter furniture and fittings factory in Riyadh, we manufacture custom
            joinery, metalwork, and bespoke furniture to cater to diverse project needs.
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
