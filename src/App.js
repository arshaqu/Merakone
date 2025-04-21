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
import Paul from './Pages/Projects/ProjectDetails/Paul';
import Reserved from './Pages/Projects/ProjectDetails/Reserved';
import AlhussainiJizan from './Pages/Projects/ProjectDetails/AlhussainiJizan';
import Intimissimi from './Pages/Projects/ProjectDetails/Intimissimi';
import Gissah from './Pages/Projects/ProjectDetails/Gissah';
import KikoMilano from './Pages/Projects/ProjectDetails/KikoMilano';
import Alhussaini_Lavanda from './Pages/Projects/ProjectDetails/Alhussaini_Lavanda';
import Brand_For_Less from './Pages/Projects/ProjectDetails/Brand_For_Less';
import Binghatti from './Pages/Projects/ProjectDetails/Binghatti';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/home_aboutus" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/about_us" element={<Aboutus/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/" element={<Home />} />


                  {/* PROJECT DETAILS */}
        <Route path="/alhussaini_lavanda" element={<Alhussaini_Lavanda/>} />
        <Route path="/al_hussaini_jizan" element={<AlhussainiJizan/>} />
        <Route path="/brand_for_less" element={<Brand_For_Less/>} />
        <Route path="/projects_reserved" element={<Reserved/>} />
        <Route path="/intimissimi" element={<Intimissimi/>} />
        <Route path="/kiko_milano" element={<KikoMilano/>} />
        <Route path="/binghatti" element={<Binghatti/>} />
        <Route path="/projects_paul" element={<Paul/>} />
        <Route path="/gissah" element={<Gissah/>} />







      </Routes>
    </Router>
  );
}


export default App;
