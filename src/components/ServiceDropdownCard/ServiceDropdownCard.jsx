import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import icon1 from "../../assets/education.svg";
import icon2 from "../../assets/compIcon.svg";
import icon3 from "../../assets/marketing.svg";

function ServiceDropdownCard({ onClick }) {
  const pages = [
    {
      image: icon1,
      title: "Կրթություն",
      to: "/education",
    },
    {
      image: icon3,
      title: "SMM ծառայություն",
      to: "/education",
    },
    {
      image: icon2,
      title: "WEB կայքերի պատրաստում",
      to: "/education",
    },
  ];
  return (
    <div className={styles.container}>
      {pages.map((page, i) => {
        return (
          <Link key={i} to={page.to} onClick={onClick}>
            <div>
              <img src={page.image} alt="" />
            </div>
            <p>{page.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceDropdownCard;
