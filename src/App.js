import './App.css';
import Aboutus from './Pages/About us/Aboutus';
import Service from './Pages/Service/Service';
import Clients from './Pages/Clients/Clients';
import About from './Pages/Home/AboutusHome';
import Home from './Pages/Home/Home';

import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import Careers from './Pages/Careers/Careers';
import ContactUs from './Pages/Contact Us/ContactUs';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home_aboutus" element={<About/>} />
        <Route path="/about_us" element={<Aboutus/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/projects" element={<Projects/>} />


      </Routes>
    </Router>
  );
}


export default App;
