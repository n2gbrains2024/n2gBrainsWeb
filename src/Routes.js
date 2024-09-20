import Home from "./pages/Home/Home.jsx";
import Team from "./pages/Team/Team.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages//Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Education from "./pages/Education/Education.jsx";
import WebDeveloping from "./pages/WebDeveloping/WebDeveloping.jsx";
import Smm from "./pages/Smm/Smm.jsx";
import Courses from "./pages/Courses/Courses.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/webDeveloping",
    element: <WebDeveloping />,
  },
  {
    path: "/smm",
    element: <Smm />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
];

export default routes;
