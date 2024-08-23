import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./MainServices.module.css";
import arrowRight from "./../../assets/arrowToRight.svg";
import arrowLeft from "./../../assets/arrowToLeft.svg";
import grayArrowRight from "./../../assets/grayArrowRight.svg";
import MainServiceCard from "../../components/MainServicesCard/MainServiceCard";
import codeLogo from "./../../assets/codeLogo.svg";

function MainServices() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: false,
    showDots: false,
    arrows: false,
    containerClass: styles.servicesSlider,
    itemClass: styles.item,
    autoPlaySpeed: 300,
    transitionDuration: 1000,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4.5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4.5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
      },
    },
  };

  const serviceCardsArray = [
    {
      title: "WEB ծրագրավորման դասընթացներ",
      image: codeLogo,
    },
    {
      title: "WEB ծրագրավորման դասընթացներ2",
      image: codeLogo,
    },
    {
      title: "WEB ծրագրավորման դասընթացներ3",
      image: codeLogo,
    },
    {
      title: "WEB ծրագրավորման դասընթացներ4",
      image: codeLogo,
    },
    {
      title: "WEB ծրագրավորման դասընթացներ5",
      image: codeLogo,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Ծառայութոյուններ</h2>
        <h1>
          Մենք մատոցում ենք
          <br />
          Լավագույն
          <br />
          Ծառայությունները
        </h1>
        <h3>Ծառայութոյուններ</h3>
        <div className={styles.dots}>
          <div className={styles.toLeft}>
            <img src={arrowLeft} alt="" />
          </div>
          <div className={styles.toRight}>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.backgroundLine}></div>
        <Carousel {...settings}>
          {serviceCardsArray.map((card) => {
            return <MainServiceCard title={card.title} image={card.image} />;
          })}
        </Carousel>
        <div className={styles.arrowRight}>
          <img src={grayArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainServices;
