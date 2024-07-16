import Savings from "../../components/Savings/Savings";
import ServicesFirstLeftSide from "../../components/ServicesFirstLeftSide/ServicesFirstLeftSide";
import styles from "./WebDevelopingServices.module.css";
import TimeImages from "../../assets/time.svg";
import PeopleImages from "../../assets/people.svg";
import MoneyIMages from "../../assets/money.svg";
import GradientSircle from "../../assets/GradientSircle.svg";

function WebDeveloping() {
  let SavingsArr = [
    {
      numbersSavings: 1,
      src: TimeImages,
      titleSavings: "Արագություն",
      descriptionSavings:
        "Արագությունը մեր ամենագլխավոր յուրահատկությունն է։ Աշխատանքը կատարվում է ամենակարճ ժամանակահատվածում",
      id: 1,
    },
    {
      numbersSavings: 3,
      src: MoneyIMages,
      titleSavings: "Մատչելի",
      descriptionSavings:
        "Մատչելի բայց որակով, հաճախորդների գոհունակությունը այս հարցում մեզ համար ևս կարևոր է։",
      id: 3,
    },
    {
      numbersSavings: 2,
      src: PeopleImages,
      titleSavings: "Պրոֆեսիոն թիմ",
      descriptionSavings: "Հանգիստ եղեք անվտանգության առումով։",
      id: 2,
    },
  ];

  return (
    <section className={styles.Container}>
      <div className={styles.SecondContainer}>
        <div className={styles.SecondChildContainer}>
          <ServicesFirstLeftSide
            buttonText="Կապ մեզ հետ"
            title="Կայքերի պատրաստում"
            scroll={50}
            description="Մենք համոզված ենք․ որ կարող ենք գերազանցել  սպասելիքները։ Վստահեք Ձեր տարբերվող և ֆունկցիոնալ WEB կայքը մեր՝ աշխատանքին նվիրված թիմին։"
          />
          <div className={styles.SecondRightSideContainer}>
            <div className={styles.MarketingsContainer}>
              <div className={styles.saving}>
                <div className={styles.savingCircleContainer}>
                  <img src={GradientSircle} />
                  <p className={styles.prcent}>+30%</p>
                  <p className={styles.CircleSaving}>խնայում</p>
                </div>
                <span className={styles.CircleText}>
                  Դուք կարող եք խնայել  մինչև 30% ձեր բյուջեից
                </span>
              </div>
              {SavingsArr.map((el) => {
                return (
                  <Savings
                    titleSavings={el.titleSavings}
                    descriptionSavings={el.descriptionSavings}
                    src={el.src}
                    key={el.id}
                    numbersSavings={el.numbersSavings}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WebDeveloping;
