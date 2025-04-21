import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../Assets/Homepage/Project2.png';
import Image2 from '../../Assets/Homepage/Project4.png';
import Image3 from '../../Assets/Homepage/Project5.png';
import Image4 from '../../Assets/Homepage/Project6.png';
import Image5 from '../../Assets/Homepage/Project7.png';

function HomeProject() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // keeping your original timing
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <motion.div 
          className="rounded-full h-16 w-16 border-t-4 border-white border-solid"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <motion.div 
      className="text-center py-12 bg-[#474e92] text-white md:mt-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-4 mt-5 against"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      
      <motion.p 
        className="text-lg p-4 md:text-xl font-semibold mb-12 montserrat md:mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We believe in turning ideas into reality through innovation and precision. Our portfolio showcases a diverse range of projects, from dynamic web applications to seamless user experiences.
      </motion.p>

      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 1 */}
            <motion.div 
              className="relative rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <img src={Image1} alt="" className="w-full h-full object-cover rounded-lg" />
              <motion.div 
                className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ y: 5 }}
              >
                PAUL LE CAFE RIYADH GALLERY MALL RIYADH
              </motion.div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <img src={Image2} alt="" className="w-full h-full object-cover rounded-lg" />
              <motion.div 
                className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ y: 5 }}
              >
                PAUL LE CAFE RIYADH GALLERY MALL RIYADH
              </motion.div>
            </motion.div>
          </div>

          {/* Card 3 */}
          <motion.div 
            className="relative mt-2 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
            }}
          >
            <img src={Image3} alt="" className="w-full h-[600px] object-cover rounded-lg" />
            <motion.div 
              className="absolute md:bottom-3 bottom-1 w-full bg-black bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90"
              whileHover={{ opacity: 1, y: 0 }}
              initial={{ y: 5 }}
            >
              RESERVED RIYADH GALERY MALL
            </motion.div>
          </motion.div>

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 4 */}
            <motion.div 
              className="relative rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <img src={Image4} alt="" className="w-full h-full object-cover rounded-lg" />
              <motion.div 
                className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ y: 5 }}
              >
                INTIMISSIMI PANORAMA MALL RIYADH
              </motion.div>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <img src={Image5} alt="" className="w-full h-full object-cover rounded-lg" />
              <motion.div 
                className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90"
                whileHover={{ opacity: 1, y: 0 }}
                initial={{ y: 5 }}
              >
                AL-HUSSAINI LAVANDA ABHA
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Button */}
      <motion.div className="mt-8">
        <motion.button 
          className="px-6 py-2 bg-white text-[#474e92] text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition montserrat"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW ALL CLIENTS
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default HomeProject;