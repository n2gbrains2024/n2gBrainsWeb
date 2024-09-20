import styles from "./styles.module.css";
import cardStyles from "../../components/CourseCard/styles.module.css";
import teamPng from "../../assets/team.png";
import CourseCard from "../../components/CourseCard/CourseCard";
import application from "../../assets/aplication.svg";
import button from "../../assets/button.svg";
import rectangle from "../../assets/rectagle.svg";
import Ai from "../../assets/Ai.svg";
import Ps from "../../assets/Ps.svg";
import icons from "../../assets/icons.svg";
import HTML from "../../assets/HTML.svg";
import JS from "../../assets/JS.svg";
import CSS from "../../assets/CSS.svg";
import Icon from "../../assets/Icon.svg";
import onlineFullStack from "../../assets/onlineFullStack.svg";
import Spread from "../../assets/Spread.svg";
import PythonBlue from "../../assets/PythonBlue.svg";
import PythonGray from "../../assets/PythonGray.svg";
import Cat from "../../assets/Cat.svg";
import n2gInstagram from "../../assets/n2gInstagram.svg";
import ecowoodhouse8 from "../../assets/ecowoodhouse8.svg";
import Footer from "../../ui/Footer/Footer";

function Education() {
  const cards = [
    {
      title: "Ui/Ux design",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
      width: "59%",
      className: "uiux",
      children: (
        <div className={cardStyles.uiuxCont}>
          <img className={cardStyles.infoImg} src={application} alt="" />
          <img className={cardStyles.infoImg2} src={button} alt="" />
          <img className={cardStyles.infoImg3} src={rectangle} alt="" />
        </div>
      ),
    },
    {
      title: "Front-End",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
      width: "39%",
      className: "frontEnd",
      children: (
        <div className={cardStyles.frontEndCont}>
          <img className={cardStyles.frontEndImg} src={Ps} alt="" />
          <img className={cardStyles.frontEndImg2} src={Ai} alt="" />
          <img className={cardStyles.frontEndImg3} src={icons} alt="" />
        </div>
      ),
    },
    {
      title: "Front-End",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a ",
      width: "39%",
      className: "frontEnd2",
      children: (
        <div className={cardStyles.frontEndCont2}>
          <img className={cardStyles.frontEnd2Img} src={HTML} alt="" />
          <img className={cardStyles.frontEnd2Img2} src={JS} alt="" />
          <img className={cardStyles.frontEnd2Img3} src={CSS} alt="" />
        </div>
      ),
    },
    {
      title: "FullStack ծրագրավորումs",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
      width: "59%",
      className: "fullStack",
      children: (
        <div className={cardStyles.fullStackCont}>
          <img className={cardStyles.fullStackImg} src={Icon} alt="" />
          <img
            className={cardStyles.fullStackImg2}
            src={onlineFullStack}
            alt=""
          />
          <img className={cardStyles.fullStackImg3} src={Spread} alt="" />
        </div>
      ),
    },
    {
      title: "Python ծրագրավորում",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
      width: "59%",
      className: "python",
      children: (
        <div className={cardStyles.pythonCont}>
          <img
            className={cardStyles.pythonImg}
            src={PythonBlue}
            alt="pythonImg"
          />
          <img className={cardStyles.pythonImg2} src={PythonGray} alt="" />
        </div>
      ),
    },
    {
      title: "Scratch",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
      width: "39%",
      className: "scratch",
      children: (
        <div className={cardStyles.scratchCont}>
          <img className={cardStyles.scratchImg} src={Cat} alt="scratchImg" />
        </div>
      ),
    },
    {
      title: "SMM դասընթաց",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
      width: "59%",
      className: "smm",
      children: (
        <div className={cardStyles.smmCont}>
          <img className={cardStyles.smmImg} src={n2gInstagram} alt="smmImg" />
          <img
            className={cardStyles.smmImg2}
            src={ecowoodhouse8}
            alt="smmImg2"
          />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.team}>
        <h1>Սովորի՛ր մեզ հետ</h1>
        <img src={teamPng} alt="" />
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoChildContainer}>
          <div className={styles.textContainer}>
            <h1>Բոլոր դասընթացները</h1>
            <p>
              Բացահայտիր մեր պատմությունը և իմացիր թե ինչպե՞ս կարող ենք մենք
              օգնել քեզ առաջ խաղացնել քո բիզնեսը սոցիալական հարթակներում։
            </p>
          </div>
          <div className={styles.cards}>
            {cards.map((card, i) => {
              return (
                <CourseCard
                  title={card.title}
                  description={card.description}
                  key={i}
                  width={card.width}
                  className={card.className}
                >
                  {card.children}
                </CourseCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.webDeveloper}></div>
      <Footer></Footer>
    </div>
  );
}

export default Education;
