import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import n2g from "../../assets/n2g.svg";
import mailIcon from "../../assets/mailIcon.svg";
import mapSvg from "../../assets/map.svg";
import phone from "../../assets/phoneIcon.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <section className={style.container}>
      <div className={style.footer}>
        <div className={style.firstContainer}>
          <h4>Մեր նպատակը</h4>
          <span>
            N2G is an IT training center whose goal is to educate and deliver
            professionals to the labor market
          </span>
          <img src={n2g} alt="" />
        </div>

        <div className={style.secondContainer}>
          <div className={style.textContainer}>
            <h5>Հղումներ</h5>
            <Link to="/">Գլխավոր</Link>
            <Link to="/services">Ծառայություններ</Link>
            <Link to="/about">Մեր մասին</Link>
            <Link to="/portfolio">Պորտֆոլիո</Link>
            <Link to="/team">Թիմ</Link>
          </div>
          <div className={style.contactsContainer}>
            <h5>Contact Info</h5>
            <a href="tel:+37496691949">
              <p>
                <img src={phone} /> (096) 694919
              </p>
            </a>
            <a href="mailto:n2gbrains@gmail.com">
              <p>
                <img src={mailIcon} /> n2gbrains@gmail.com
              </p>
            </a>
            <p>
              <img className={style.cartaSvg} src={mapSvg} alt="" />
              Կոմիտաս Վ․Վաղարշյան 21
            </p>
          </div>
          <div className={style.socialContainer}>
            <h5>Social media</h5>
            <div className={style.socialContactsContainer}>
              <a href="https://www.instagram.com/n2gbrains" target="_blank">
                <img src={instagram} alt="" />
              </a>
              <a href="https://www.facebook.com/N2GBrains/" target="_blank">
                <img src={facebook} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
