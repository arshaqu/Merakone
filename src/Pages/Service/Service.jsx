import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ServicesBg from '../../Assets/Services/ServicesBann.png'
import Image1 from '../../Assets/Services/Image1.png'
import Image2 from '../../Assets/Services/Image2.png'
import Image3 from '../../Assets/Services/Image3.png'
import Image4 from '../../Assets/Services/Image4.png'
import EndBan from '../../Assets/Services/EndtoEndBan.png'
import Ourworks from './Ourworks'
import Bgline from '../../Assets/Services/BgLine.png'
import Bgimg from '../../Assets/Services/BgImg.png'




function Service() {
    return (
        <div>
            <div>
          <div className="relative z-50">
            <Navbar />
          </div>
    
          <div
            className="w-full h-[500px] flex flex-col items-center justify-center text-center relative px-4"
            style={{
              backgroundImage: `url(${ServicesBg})`,
              backgroundSize: 'cover',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
    
            <div className="relative z-10 max-w-8xl">
              <h1
                className="text-5xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
                style={{ fontFamily: 'Against Regular, serif' }}
              >
                Services
              </h1>
              <p className="uppercase tracking-[7px] text-blue-500 font-semibold md:mt-5 mb-6">
                Home &gt; Service
              </p>
              <p className="text-[#2d3680] md:w-full text-lg md:text-xl montserrat">
                At Merakone Interiors, we specialize in delivering top-quality interior solutions tailored to meet the unique needs of our clients. From conceptualization to execution, we insure seamless and innocaiton solutions across various industries.
              </p>
            </div>
            
          </div>
    
        </div>
        <div>
        <div className="relative z-10 max-w-full bg-gradient-to-b from-[#dcdcdc] to-[#e0dcdc] px-4 py-16 md:px-48">
  <h1
    className="text-5xl md:text-6xl font-serif text-[#2d3680] mb-4 text-center"
    style={{ fontFamily: 'Against Regular, serif' }}
  >
    What We Offer
  </h1>

  <p className="text-[#2d3680] text-lg md:text-xl montserrat text-center mb-10">
    We provide end-to-end interior and fit-out services that bring functionality, aesthetics, and efficiency together.
    Our expertise spans across:
  </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                        {/* Card 1 */}
                        <div className="relative w-auto max-w-auto md:h-[450px] md:auto overflow-hidden ">
                            <img
                                src={Image1}
                                alt="Custom Furniture"
                                className="w-full h-full "
                            />
                            <div className="absolute inset-0  flex flex-col justify-end p-12 text-center">
                                <h3 className="text-white text-xl  mb-2 font-serif tracking-wide">
                                    TURNKEY FIT-OUT SOLUTIONS
                                </h3>
                                <p className="text-white text-sm md:text-lg montserrat">
                                    From design to execution, we handle everything to deliver fully furnished and ready-to-use interiors.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-auto max-w-auto md:h-[450px] md:auto overflow-hidden ">
                            <img
                                src={Image2}
                                alt="Custom Furniture"
                                className="w-full h-full "
                            />
                            <div className="absolute inset-0  flex flex-col justify-end p-12 text-center">
                                <h3 className="text-white text-xl font-semibold mb-2 font-serif tracking-wide against">
                                    CUSTOM FURNITURE &amp; FITTINGS PRODUCTION
                                </h3>
                                <p className="text-white text-sm md:text-lg montserrat">
                                    Precision-crafted furniture and fittings that blend quality with aesthetics.
                                </p>
                            </div>
                        </div>
                            {/* Card 3 */}
                        <div className="relative w-auto max-w-auto md:h-[450px] md:auto overflow-hidden ">
                            <img
                                src={Image3}
                                alt="Custom Furniture"
                                className="w-full h-full "
                            />
                            <div className="absolute inset-0  flex flex-col justify-end p-12 text-center">
                                <h3 className="text-white text-xl  mb-2 font-serif tracking-wide">
                                    OFFICE DESIGN AND BUILD
                                </h3>
                                <p className="text-white text-sm md:text-lg">
                                    Creating inspiring and functional workplaces that reflect your brand identify.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="relative w-auto max-w-auto md:h-[450px] md:auto overflow-hidden ">
                            <img
                                src={Image4}
                                alt="Custom Furniture"
                                className="w-full h-full "
                            />
                            <div className="absolute inset-0  flex flex-col justify-end p-12 text-center">
                                <h3 className="text-white text-xl font-semibold mb-2 font-serif tracking-wide against">
                                    POST OPENING SUPPORT
                                </h3>
                                <p className="text-white text-sm md:text-lg montserrat">
                                    Ongoing maintance and quick support to keep your space at its best.
                                </p>
                            </div>
                        </div>


  </div>

  <div 
  style={{ 
    backgroundImage: `url(${Bgline})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    position: 'relative'
  }}
  className="py-8 md:py-16"
>
  <div className="relative w-full md:h-auto overflow-hidden mb-8 md:mb-12 hidden md:block">
    <img
      src={EndBan}
      alt="Custom Furniture"
      className="w-full h-full object-cover"
    />
    
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h3 className="text-white text-3xl md:text-5xl font-semibold mb-4 font-serif tracking-wide against">
        End-to-End Interior Solution 
      </h3>
      <p className="text-white text-lg md:text-2xl montserrat">
        From concept to Execution, We handle everything.
      </p>
    </div>
  </div>

  <div className="container mx-auto px-4">
    <Ourworks />
  </div>
</div>
</div>
</div>




<div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${Bgimg})`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        <div className="w-full md:w-2/2 m-5 text-white">
          <h1 
            className="text-4xl  md:text-5xl lg:text-6xl font-light mb-6 against "
            style={{ 
              lineHeight: '1.1'
            }}
          >
            Where design<br />
            meets functionality
          </h1>
          
          <p className="text-base md:text-lg font-light max-w-md montserrat">
            At Merakone, we take pride in delivering excellence with a 
            commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </div>
    </div>



          <Footer/>
        </div>
      );
    }
export default Service
