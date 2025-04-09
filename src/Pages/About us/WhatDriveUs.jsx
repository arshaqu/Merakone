import React from "react";
import BannerImg from "../../Assets/Aboutus/WhatdrivesBanner.jpg";
import Image1 from "../../Assets/Aboutus/Image5.png";
import Image2 from "../../Assets/Aboutus/Image6.png";

function WhatDrivesUs() {
    return (
      <div
        className="w-full flex flex-col justify-center items-center px-6 py-20 relative"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl w-full text-center">
         
         
  
          <ul className="mt-6 text-left mx-auto md:w-full space-y-1 text-lg">
          <h3 className="text-xl font-semibold montserrat ">WHAT DRIVES US</h3>
            <h1 className="md:text-7xl mt-2 against " > Why Choose Us?</h1>
            <li className="font-bold md:mt-6 montserrat">
            At Merakone Interiors, we take pride in our ability to deliver exceptional interior solutions tailored to our clients' needs. Here's what sets us apart:
            </li>
            <li className="flex items-start md:mt-12">
              <span className="mr-2">✦</span>
              Product & Service Quality  –   We use only the finest materials and craftsmanship to ensure superior results.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✦</span>
              On-Time Delivery  –  Our streamlined project management ensures we meet deadlines without compromising quality.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✦</span>
                  The Best Value for Your Money  –  We offer cost-effective solutions with uncompromised excellence.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✦</span>
              Passion for Our Work  –  Our team is driven by a love for design and innovation, ensuring every project is a masterpiece.
            </li>
          </ul>
  
          {/* Image Section */}
          <div className="flex justify-center gap-6 mt-10 md:mt-12">
            <img
              src={Image2}
              alt="Interior Design 1"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-lg"
            />
            <img
              src={Image1}
              alt="Interior Design 2"
              className="w-full md:w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default WhatDrivesUs;