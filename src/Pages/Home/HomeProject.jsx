import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../Assets/Homepage/Project2.png';
import Image2 from '../../Assets/Homepage/Project4.png';
import Image3 from '../../Assets/Homepage/Project5.png';
import Image4 from '../../Assets/Homepage/Project6.png';
import Image5 from '../../Assets/Homepage/Project7.png';

function HomeProject() {
  const [loading, setLoading] = useState(true);

  const captionVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, transition: { duration: 0.4 } }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-4 mt-5 against"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      
      <motion.p 
        className="text-lg p-4 md:text-xl font-semibold mb-12 montserrat md:mt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We believe in turning ideas into reality through innovation and precision. Our portfolio showcases a diverse range of projects, from dynamic web applications to seamless user experiences.
      </motion.p>

      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 1 - Caption only appears on hover */}
            <motion.div 
              className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
            >
              <motion.div className="w-full h-full" variants={imageVariants}>
                <img src={Image1} alt="" className="w-full h-full object-cover rounded-lg" />
              </motion.div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                AL - HUSSAINI KADI MALL JIZAN
              </div>
            </motion.div>

            {/* Card 2 - Caption always visible */}
            <motion.div 
              className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
            >
              <motion.div className="w-full h-full" variants={imageVariants}>
                <img src={Image2} alt="" className="w-full h-full object-cover rounded-lg" />
              </motion.div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                PAUL LE CAFE RIYADH GALLERY MALL RIYADH
              </div>
            </motion.div>
          </div>

          {/* Card 3 - Caption always visible */}
          <motion.div 
            className="relative mt-2 rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover="hover"
          >
            <motion.div className="w-full h-full" variants={imageVariants}>
              <img src={Image3} alt="" className="w-full h-[600px] object-cover rounded-lg" />
            </motion.div>
            <div className="absolute md:bottom-3 bottom-1 w-full bg-black hover:bg-opacity-90 hover:bg-[#474e92] bg-opacity-50 text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
              RESERVED RIYADH GALERY MALL
            </div>
          </motion.div>

          {/* Grouped Cards */}
          <div className="flex flex-col items-center justify-center">
            {/* Card 4 - Caption always visible */}
            <motion.div 
              className="relative rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
            >
              <motion.div className="w-full h-full" variants={imageVariants}>
                <img src={Image4} alt="" className="w-full h-full object-cover rounded-lg" />
              </motion.div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                INTIMISSIMI PANORAMA MALL RIYADH
              </div>
            </motion.div>

            {/* Card 5 - Caption always visible */}
            <motion.div 
              className="relative mt-4 rounded-lg overflow-hidden w-full h-[300px] transform transition duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover="hover"
            >
              <motion.div className="w-full h-full" variants={imageVariants}>
                <img src={Image5} alt="" className="w-full h-full object-cover rounded-lg" />
              </motion.div>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 hover:bg-opacity-90 hover:bg-[#474e92] text-white text-center py-4 text-sm md:text-lg font-bold montserrat transition duration-300 opacity-90">
                AL-HUSSAINI LAVANDA ABHA
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Button */}
      <motion.div 
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <a href="/projects">
          <motion.button 
            className="px-6 py-2 bg-white text-[#474e92] text-gray-900 font-semibold rounded-full hover:bg-gray-300 transition montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL PROJECTS
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HomeProject;