import Home from "./pages/Home/Home.jsx";
import Team from "./pages/Team/Team.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Contact from "./pages//Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Education from "./pages/Education/Education.jsx";
import WebDeveloping from "./pages/WebDeveloping/WebDeveloping.jsx";
import Smm from "./pages/Smm/Smm.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import CourseRegistration from "./ui/CourseRegistration/CourseRegistration.jsx";
import Course from "./pages/Course/Course.jsx";

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
    element: <Courses index={0} />,
  },
  {
    path: "/courses/front-end",
    element: <Courses index={0} />,
  },
  {
    path: "/courses/front-end2",
    element: <Courses index={0} />,
  },
  {
    path: "/courses/fullstack",
    element: <Courses index={1} />,
  },
  {
    path: "/courses/python",
    element: <Courses index={2} />,
  },
  {
    path: "/courses/uiux",
    element: <Courses index={3} />,
  },
  {
    path: "/courses/graphic-design",
    element: <Courses index={4} />,
  },
  {
    path: "/courses/smm",
    element: <Courses index={5} />,
  },
  {
    path: "/courseRegistration",
    element: <CourseRegistration />,
  },
  {
    path: "/course/front-end",
    element: <Course />,
  },
];

export default routes;
