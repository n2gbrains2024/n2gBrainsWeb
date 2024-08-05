import miniLogo from "../../assets/miniLogo.svg";
import callSvg from "../../assets/call.svg";
import fbCircle from "../../assets/fbCircle.svg";
import igCircle from "../../assets/igCircle.svg";
import lkCircle from "../../assets/lkCircle.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img src={miniLogo} className={styles.miniLogo} alt="" />
        <div className={styles.info}>
          <a href="https://www.fb.com/n2gbrains" target="_blank">
            <img className={styles.icon} src={fbCircle} />
          </a>
          <a href="https://www.instagram.com/n2gbrains" target="_blank">
            <img className={styles.icon} src={igCircle} />
          </a>
          <a href="#" target="_blank">
            <img className={styles.icon} src={lkCircle} />
          </a>
          <a href="tel:+37496691949" className={styles.phoneAnchor}>
            <div className={styles.phone}>
              <img src={callSvg} alt="" />
              <span>(096) 691949</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
