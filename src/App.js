
import './App.css';
import Navbar from './components/navbar';
import ServicesPage from './components/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from  './components/home component/home'
import ContactUsPage from './components/contactus';
import Header from './components/header';
import AboutSection from './components/aboutus';

function App() {
  return (
    <Router>
      <div>
        
        <Navbar/>
        <Routes>
         <Route path="/" element={<HomePage/>} />
        <Route path="/contactus" element={<ContactUsPage/>}/>
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/aboutus" element={<AboutSection/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
