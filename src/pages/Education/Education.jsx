import styles from "./styles.module.css";
import teamPng from "../../assets/team.png";
import CourseCard from "../../components/CourseCard/CourseCard";
import aplication from "../../assets/aplication.svg";
import button from "../../assets/button.svg";
import rectagle from "../../assets/rectagle.svg";
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

function Education() {
  const cards = [
    {
      title: "Ui/Ux design",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
      width: "59%",
      children: (
        <div className={styles.infoCont}>
          <img className={styles.infoImg} src={aplication} alt="infoImg" />
          <img className={styles.infoImg2} src={button} alt="infoImg2" />
          <img className={styles.infoImg3} src={rectagle} alt="infoImg3" />
        </div>
      ),
    },
    {
      title: "Front-End",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
      width: "39%",
      children: (
        <div className={styles.frontEndCont}>
          <img className={styles.frontEndImg} src={Ps} alt="frontEndImg" />
          <img className={styles.frontEndImg2} src={Ai} alt="frontEndImg2" />
          <img className={styles.frontEndImg3} src={icons} alt="frontEndImg3" />
        </div>
      ),
    },
    {
      title: "Front-End",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a ",
      width: "39%",
      children: (
        <div className={styles.frontEndCont2}>
          <img className={styles.frontEnd2Img} src={HTML} alt="frontEnd2Img" />
          <img className={styles.frontEnd2Img2} src={JS} alt="frontEnd2Img2" />
          <img className={styles.frontEnd2Img3} src={CSS} alt="frontEnd2Img3" />
        </div>
      ),
    },
    {
      title: "FullStack ծրագրավորումs",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
      width: "59%",
      children: (
        <div className={styles.fullStackCont}>
          <img className={styles.fullStackImg} src={Icon} alt="fullStackImg" />
          <img
            className={styles.fullStackImg2}
            src={onlineFullStack}
            alt="fullStackImg2"
          />
          <img
            className={styles.fullStackImg3}
            src={Spread}
            alt="fullStackImg3"
          />
        </div>
      ),
    },
    {
      title: "Python ծրագրավորում",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of both front-end and back-end",
      width: "59%",
      children: (
        <div className={styles.pythonCont}>
          <img className={styles.pythonImg} src={PythonBlue} alt="pythonImg" />
          <img
            className={styles.pythonImg2}
            src={PythonGray}
            alt="pythonImg2"
          />
        </div>
      ),
    },
    {
      title: "Scratch",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a",
      width: "39%",
      children: (
        <div className={styles.scratchCont}>
          <img className={styles.scratchImg} src={Cat} alt="scratchImg" />
        </div>
      ),
    },
    {
      title: "SMM դասընթաց",
      description:
        "Nkaragrutyuumn savljsngvljsbgla v End-to-End Knowledge: The course provides a holistic understanding of",
      width: "59%",
      children: (
        <div className={styles.smmCont}>
          <img className={styles.smmImg} src={n2gInstagram} alt="smmImg" />
          <img className={styles.smmImg2} src={ecowoodhouse8} alt="smmImg2" />
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
                >
                  {card.children}
                </CourseCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
