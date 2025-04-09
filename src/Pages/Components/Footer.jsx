import React from 'react'
import Logo from '../../Assets/MerakoneLogo.png';

function Footer() {
 
        return (
          <footer className="bg-gray-200 py-10 px-6 md:px-20">
            <div className=" max-w-7xl mx-auto flex flex-col  md:flex-row justify-between items-center md:items-start text-center md:text-left">
              
              {/* Left Section */}
              <div className="md:w-1/3  md:ml-[-20px]">
            <img src={Logo} className=" h-6 ml-12 md:ml-[-50px]  md:h-12 " alt="Merak One Logo" />
      
                {/* Social Icons */}
                <h3 style={{color:'#2d3680',fontWeight:'bold'}} className="mt-5 montserrat font-bold">STAY CONNECTED</h3>
                <div className="flex justify-center md:justify-start space-x-4 mt-3">
                  <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-facebook-f"></i></a>
                </div>
      
                <p style={{color:'#2d3680'}} className="text-gray-600 text-sm mt-5">© 2025 Merak One. All rights reserved</p>
              </div>
      
              {/* Center Section - Contact */}
              <div  className="md:w-1/3 mt-6 md:mt-0 montserrat">
                <h3 style={{color:'#2d3680'}} className="text-lg md:text-2xl font-bold text-gray-800 ">CONTACT</h3>
                <ul style={{color:'#2d3680'}} className="mt-2 space-y-2 md:ml-2 text-gray-600 text-sm md:text-lg">
                  <li><a href="#" className="hover:text-blue-500">Home</a></li>
                  <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-500">Services</a></li>
                  <li><a href="#" className="hover:text-blue-500">Projects</a></li>
                  <li><a href="#" className="hover:text-blue-500">Clients</a></li>
                  <li><a href="#" className="hover:text-blue-500">Careers</a></li>

                </ul>
              </div>
      
              {/* Right Section - Find Us */}
              <div  className="md:w-1/3 mt-6 md:mt-0">
                <h3 style={{color:'#2d3680'}} className="text-lg md:text-2xl font-bold  text-gray-800">FIND US</h3>
                <p style={{color:'#2d3680'}} className="text-gray-600 text-sm md:text-lg mt-2">
                  Our Locations: Saudi Arabia <br />
                  Head Office: PB NO: 12629, Mujahid Street, Riyadh, Saudi Arabia <br />
                  Regional Office: Bahrain, KCity, Manama, Bahrain
                </p>
                <p style={{color:'#2d3680'}} className="text-gray-800 font-semibold text-sm mt-3">
                  Email: <a href="mailto:info@merakone.com" className="text-blue-500">info@merakone.com</a>
                </p>
      
                <p style={{color:'#2d3680'}} className="text-gray-600 text-sm mt-4">
                  Designed & Powered by Merak One
                </p>
              </div>
      
            </div>
          </footer>
         
  )
}

export default Footer
