import './App.css';
import Header from "./ui/Header/Header.jsx"
import Menu from './ui/Menu/Menu.jsx';
import Home from "./pages/Home/Home.jsx"
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services/Services.jsx';
import Team from './pages/Team/Team.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Contact from './pages//Contact/Contact.jsx';
import About from './pages/About/About.jsx';
import Footer from './ui/Footer/Footer.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/team' element={<Team />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
