import mainStyles from "./Main.module.css";
import RunnerText from "../../components/RunnerText/RunnerText.jsx";
import BlackComponent from "../BlackComponent/BlackComponent.jsx";
import Services from "../Services/Services.jsx";
import Contact from "../../ui/Contact/Contact";
import We from "../We/We.jsx";
import BigCard from "../../components/BigCard/BigCard.jsx";
import LandingComponent from "../../components/LandingComponent/LandingComponent.jsx";
import Feedbacks from "../Feedbacks/Feedbacks.jsx";
import Footer from "../Footer/Footer.jsx";
import Courses from "../Courses/Courses.jsx";

function Main() {
  return (
    <div className={mainStyles.main}>
      <LandingComponent />
      <BigCard />
      <RunnerText />
      <Courses />
      <BlackComponent />
      <Services />
      <Contact />
      <Feedbacks />
      <We />
      <div className={mainStyles.footerLine}></div>
      <Footer />
    </div>
  );
}

export default Main;
