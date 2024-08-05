import { Link } from "react-router-dom";

import styles from "./Menu.module.css";
import n2gLogo from "../../assets/n2gWhiteLittleIcon.svg";
import menuIcon from "../../assets/menuIcon.svg";

function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menuItems}>
        <Link to="/">Գլխավոր</Link>
        <Link to="/services">Ծառայություններ</Link>
        <Link to="/portfolio">Պորտֆոլիո</Link>
        <Link to="/team">Թիմ</Link>
        <Link to="/about">Մեր մասին</Link>
        <Link to="/contact">Կապ մեզ հետ</Link>
      </div>
      <div className={styles.mobileMenu}>
        <img src={n2gLogo} alt="" />
        <img src={menuIcon} alt="" />
      </div>
    </div>
  );
}

export default Menu;
