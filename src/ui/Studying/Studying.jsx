import ServicesFirstLeftSide from "../../components/ServicesFirstLeftSide/ServicesFirstLeftSide";
import Professions from "../../components/Professions/Professions";
import styles from "./Studying.module.css";
import arow from "../../assets/arrow.svg";

const Studying = () => {
  const ProfessionsArr = [
    {
      className: "smm",
      title: "SMM",
      des: "(Meta bussines suit, Sales)",
      id: 1,
    },
    {
      className: "solidity",
      title: "Solidity",
      des: "(Blockchain, Smart content)",
      id: 2,
    },
    {
      className: "web",
      title: "Web ծրագրաորում",
      des: "(FrontEnd,BackEnd)",
      id: 3,
    },
    { className: "uxUi", title: "UX/UI", des: "(WEB design, Figma)", id: 4 },
  ];
  return (
    <section className={styles.Container}>
      <div className={styles.firstContainer}>
        <div className={styles.firstChildContainer}>
          <ServicesFirstLeftSide
            buttonText="Բոլոր դասընթացները"
            title="Ուսում"
            first={true}
            scroll={window.innerHeight}
            description="ՏՏ ամենապահանջված մասնագիտությունները քեզ են սպասում։ Մեր տված գիտելիքների շնորհիվ դու կկարողանաս կատարել առաջին քայլերդ դեպի քո երազած մասնագիտություն։"
          />

          <div className={styles.firstRightSideContainer}>
            <div className={styles.professions}>
              <section className={styles.ArowwImagesContainer}>
                <img src={arow} alt="aroImages" />
              </section>
              {ProfessionsArr.map((profession, index) => {
                return (
                  <Professions
                    title={profession.title}
                    des={profession.des}
                    className={profession.className}
                    key={profession.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Studying;
