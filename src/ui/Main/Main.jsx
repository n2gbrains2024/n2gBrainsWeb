import mainStyles from "./Main.module.css"
import RunnerText from "../../components/RunnerText/RunnerText.jsx"
import CourseCard from "../../components/CourseCard/CourseCard.jsx"
import BlackComponent from "../BlackComponent/BlackComponent.jsx"
import Services from "../Services/Services.jsx"
import Contact from "../../ui/Contact/Contact"
import We from "../We/We.jsx"
import BigCard from "../../components/BigCard/BigCard.jsx"
import LandingComponent from "../../components/LandingComponent/LandingComponent.jsx"
import Students from "../Students/Students.jsx"
import Feedbacks from "../Feedbacks/Feedbacks.jsx"

function Main() {
    return (
        <div className={mainStyles.main}>
            <LandingComponent />
            <BigCard />
            <RunnerText />
            <CourseCard />
            <BlackComponent />
            <Services />
            <Contact />
            <Students/>
            <Feedbacks/>
            <We />
            <div className={mainStyles.footerLine}>helllooo</div>
        </div>
    )
}

export default Main