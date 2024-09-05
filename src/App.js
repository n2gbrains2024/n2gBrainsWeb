import "./App.css";
import Menu from "./ui/Menu/Menu.jsx";
import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Team from "./pages/Team/Team.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages//Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Education from "./pages/Education/Education.jsx";

function App() {
  return (
    <div className="container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
