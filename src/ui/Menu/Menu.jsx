import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";
import n2gLogo from "../../assets/n2gWhiteLittleIcon.svg";
import menuIcon from "../../assets/menuIcon.svg";
import userFace from "../../assets/userFace.svg";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.menu}>
      <div className={styles.menuItems}>
        <img src={n2gLogo} alt="" />
        <div className={styles.links}>
          <Link to="/">Գլխավոր</Link>
          <Link to="/services">Ծառայություններ</Link>
          <Link to="/portfolio">Պորտֆոլիո</Link>
          <Link to="/team">Թիմ</Link>
          <Link to="/about">Մեր մասին</Link>
        </div>
        <div className={styles.user}>
          <img src={userFace} alt="" />
        </div>
      </div>
      <div className={styles.mobileMenu}>
        <img src={n2gLogo} alt="" />
        <img
          src={menuIcon}
          alt=""
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
        {openMenu ? <div className={styles.openedMenu}></div> : ""}
      </div>
    </div>
  );
}

export default Menu;
