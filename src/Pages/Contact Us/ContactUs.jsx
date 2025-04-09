import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactBg from '../../Assets/ContactUs/ContactusBan.png';
import ContactImg from '../../Assets/ContactUs/ContactImg.png'






function ContactUs() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  
    return (
      <div>
        {/* Navbar */}
        <div className="relative z-50">
          <Navbar />
        </div>
  
        {/* Banner */}
        <div
          className="w-full h-[500px] flex flex-col items-center justify-center text-center relative px-4"
          style={{
            backgroundImage: `url(${ContactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
  
          <div className="relative z-10 max-w-8xl" data-aos="fade-up">
            <h1
              className="text-5xl md:text-6xl font-serif font-semibold text-[#2d3680] mb-4"
              style={{ fontFamily: 'Against Regular, serif' }}
            >
              CONTACT US
            </h1>
            <p className="uppercase tracking-[7px] text-blue-500 font-semibold md:mt-5 p-4 mb-6">
              Home &gt; Contact Us
            </p>
            <p className="text-[#2d3680] md:w-full text-lg md:text-xl montserrat">
              We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
              feel free to reach out and connect with our team.
            </p>
          </div>
        </div>
  
        {/* Contact Information and Say Hello Section */}
        <div className="bg-[#dcdcdc] py-12 px-4 md:px-16">
          {/* Contact Info Row */}
          <div
            className="flex flex-col md:flex-row justify-between text-[#2d3680] text-md mb-10 md:ml-96 montserrat"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6 md:mb-0">
              <h2 className="font-bold text-2xl mb-2">WHERE TO FIND US</h2>
              <p>
                Saudi Arabia, Head Office: PB NO: 12629,<br />
                Mujahid Street, Riyadh, Saudi Arabia<br />
                Regional Office: Bahrain KCity, Manama, Bahrain
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <h2 className="font-bold text-xl mb-2">DROP US A MESSAGE</h2>
              <p>
                Email:{' '}
                <a href="mailto:info@merakone.com" className="text-blue-700 hover:underline">
                  info@merakone.com
                </a>
              </p>
              <h2 className="font-bold text-xl mt-4 mb-2">GIVE US A RING</h2>
              <p>+91 25 2534 2565</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-2">CONNECT WITH US</h2>
              <div className="flex space-x-4 text-2xl mt-2">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </div>
              <p className="text-sm mt-4">© 2025 Merak One. All rights reserved.</p>
            </div>
          </div>
  
          {/* Say Hello Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center mt-12 md:ml-24">
            {/* Image */}
            <div
              className="rounded-[60px] overflow-hidden shadow-lg md:w-1/2 hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={ContactImg} alt="MerakOne Office" className="w-full h-auto object-cover" />
            </div>
            {/* Form */}
            <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="400">
              <h2
                className="text-5xl font-serif text-[#2d3680] mb-6"
                style={{ fontFamily: 'Against Regular, serif' }}
              >
                Say Hello
              </h2>
              <form className="flex flex-col space-y-6">
                <div data-aos="fade-right" data-aos-delay="300">
                  <label className="block mb-2 text-lg montserrat">Hello there, My name is</label>
                  <input
                    type="text"
                    placeholder="Your Name Here"
                    className="w-full border bg-[#dcdcdc] border-gray-400 p-3 rounded-md"
                  />
                </div>
                <div data-aos="fade-left" data-aos-delay="400">
                  <label className="block mb-2 text-lg montserrat">And I'm looking for</label>
                  <textarea
                    placeholder="Your message"
                    className="w-full border bg-[#dcdcdc] border-gray-400 p-3 rounded-md h-32 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-aos="zoom-in-up"
                  data-aos-delay="500"
                  className="bg-[#2d3680] text-white px-6 py-3 rounded-lg hover:bg-[#1f2766] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
          <h2
            className="text-3xl font-bold text-center text-[#2d3680] mb-4 against mt-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our Presious Locaion
          </h2>
  
        {/* Google Map Section */}
        <div className="">
          <div className="w-full flex justify-center">
            <iframe
              className="p-4 rounded-lg shadow-lg w-[90%] md:w-[100%] "
              title="MerakOne Map"
              data-aos="fade-up"
              data-aos-delay="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1105209.867525749!2d46.33209296291543!3d24.508318142972414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49b1d20f10ee8e65%3A0x9641e75971fac4fc!2sMerakone%20Interiors!5e0!3m2!1sen!2sin!4v1744112089989!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  
  export default ContactUs;