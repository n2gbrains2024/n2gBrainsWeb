import styles from "./ServiceDropdownCard.module.css";
import icon1 from "../../assets/education.svg";
import icon2 from "../../assets/compIcon.svg";
import icon3 from "../../assets/marketing.svg";

function ServiceDropdownCard() {
  const pages = [
    {
      image: icon1,
      title: "Կրթություն",
    },
    {
      image: icon2,
      title: "WEB կայքերի պատրաստում",
    },
    {
      image: icon3,
      title: "SMM ծառայություն",
    },
  ];
  return (
    <div className={styles.container}>
      {pages.map((page, i) => {
        return (
          <div key={i}>
            <div>
              <img src={page.image} alt="" />
            </div>
            <p>{page.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceDropdownCard;
