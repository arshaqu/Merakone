import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerImg from "../../Assets/Aboutus/Ourstory.jpg";
import Image1 from "../../Assets/Aboutus/ContentImg.png";

function Ourstory() {
  // Initialize AOS for this component
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
    
    // Refresh AOS when component mounts
    AOS.refresh();
    
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <div>
      <div
        className="flex items-center justify-center py-20 px-6 md:px-28"
        style={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        data-aos="fade-in"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        data-aos-duration="1500"
      >
        <div
          style={{ color: "#2d3680" }}
          className="mx-auto flex flex-col md:flex-row items-center md:items-start justify-between relative"
        >
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 md:ml-20 text-left">
            <h1
              className="text-6xl md:ml-28"
              style={{ fontFamily: "Against Regular, sans-serif", color: "#2d3680" }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Our Story
            </h1>
            <p
              style={{ color: "#2d3680" }}
              className="text-lg mt-6 leading-relaxed montserrat mt-12 p-5"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Merakone Interiors was founded with a vision to revolutionize interior spaces through innovative design and precision execution. Over the years, we have built a reputation for delivering world-class interiors that blend aesthetics with functionality. Our journey began with a small team of passionate professionals who believed in the power of great design. Today, we have grown into an industry leader, offering comprehensive fit-out services to luxury retail brands, corporate offices, restaurants, and residential projects. Our partnerships with skilled subcontractors across the Kingdom further strengthen our ability to deliver top-tier solutions.
            </p>

            <h1
              className="text-5xl  mt-12 p-5"
              style={{ fontFamily: "Against Regular, sans-serif", color: "#2d3680" }}
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Experience & Passion
            </h1>
            <p 
              style={{ color: "#2d3680" }} 
              className="text-lg mt-6 leading-relaxed mt-8 md:mt-2 p-5"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              At Merakone, our passion for interior design drives everything we do. With years of experience in the industry, we bring a deep understanding of market trends, materials, and construction techniques. Our dedicated team is committed to bringing our clients' visions to life, ensuring every project is executed with precision, creativity, and efficiency. We believe that every space tells a story, and we strive to make each project a reflection of our client's brand identity and aspirations. Whether it's a luxury retail store, a vibrant F&B space, a corporate office, or a cozy home, we create interiors that inspire and elevate experiences.
            </p>
          </div>

          {/* Right Side - Image */}
          <div 
            className="w-full md:w-1/2 flex absolute justify-end items-end relative"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <img 
              loading="lazy"
              src={Image1}
              alt="Interior Design"
              className="w-[350px] h-auto md:w-[550px] md:h-auto rounded-lg bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstory;