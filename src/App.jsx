import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Footer from "./Footer";
import About from './Pages/about';
import VisionMission from './Pages/VisionMission'
import Contact from "./Pages/Contact";
import BookNow from './Components/BookNow/BookNow';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/VisionMission" element={<VisionMission />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/BookNow' element={<BookNow/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
