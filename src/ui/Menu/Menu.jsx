import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceDropdownCard from "../../components/ServiceDropdownCard/ServiceDropdownCard";

import styles from "./Menu.module.css";
import n2gLogo from "../../assets/n2gWhiteLittleIcon.svg";
import menuIcon from "../../assets/menuIcon.svg";
import userFace from "../../assets/userFace.svg";
import closeIcon from "../../assets/close.svg";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServiceDropdown, setServiceDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      setServiceDropdown(false);
    });
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const toggleServiceDropdown = () => {
    setTimeout(() => {
      setServiceDropdown(!openServiceDropdown);
    });
  };
  return (
    <div className={styles.menu}>
      <div className={styles.menuItems}>
        <img src={n2gLogo} alt="" />
        <div className={styles.links}>
          <Link to="/">Գլխավոր</Link>
          <div>
            <Link to="/services" onClick={toggleServiceDropdown}>
              Ծառայություններ
            </Link>
            {openServiceDropdown ? <ServiceDropdownCard /> : ""}
          </div>
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
          src={openMenu ? closeIcon : menuIcon}
          alt=""
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
        {openMenu ? (
          <div className={styles.openedMenu}>
            <div className={styles.mobileMenuLinks}>
              <Link to="/" onClick={toggleMenu}>
                Գլխավոր
              </Link>
              <div>
                <Link to="/services" onClick={toggleServiceDropdown}>
                  Ծառայություններ
                </Link>
                {openServiceDropdown ? <ServiceDropdownCard /> : ""}
              </div>
              <Link to="/portfolio" onClick={toggleMenu}>
                Պորտֆոլիո
              </Link>
              <Link to="/team" onClick={toggleMenu}>
                Թիմ
              </Link>
              <Link to="/about" onClick={toggleMenu}>
                Մեր մասին
              </Link>
            </div>
            <div>
              <a href="tel:+37496691949" className={styles.phoneButton}>
                +374 96691949
              </a>
              <h1>Մուտք գործել</h1>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Menu;
