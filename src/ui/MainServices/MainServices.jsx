import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./MainServices.module.css";
import arrowRight from "./../../assets/arrowToRight.svg";
import arrowLeft from "./../../assets/arrowToLeft.svg";
import grayArrowRight from "./../../assets/grayArrowRight.svg";
import MainServiceCard from "../../components/MainServicesCard/MainServiceCard";
import codeLogo from "./../../assets/codeLogo.svg";
import { useRef, useState } from "react";

function MainServices() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: false,
    showDots: false,
    arrows: false,
    containerClass: styles.servicesSlider,
    itemClass: styles.item,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
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
      info: "1",
    },
    {
      title: "WEB ծրագրավորման դասընթացներ2",
      image: codeLogo,
      info: "2",
    },
    {
      title: "WEB ծրագրավորման դասընթացներ3",
      image: codeLogo,
      info: "3",
    },
    {
      title: "WEB ծրագրավորման դասընթացներ4",
      image: codeLogo,
      info: "4",
    },
    {
      title: "WEB ծրագրավորման դասընթացներ5",
      image: codeLogo,
      info: "5",
    },
    {
      title: "WEB ծրագրավորման դասընթացներ6",
      image: codeLogo,
      info: "6",
    },
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const slideRight = () => {
    sliderRef.current.next();
    if (index === serviceCardsArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const slideLeft = () => {
    sliderRef.current.previous();
    if (index <= 0) {
      setIndex(serviceCardsArray.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

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
          <div className={styles.toLeft} onClick={slideLeft}>
            <img src={arrowLeft} alt="" />
          </div>
          <div className={styles.toRight} onClick={slideRight}>
            <img src={arrowRight} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.backgroundLine}></div>
        <Carousel {...settings} ref={sliderRef}>
          {serviceCardsArray.map((card, i) => {
            return (
              <MainServiceCard
                title={card.title}
                image={card.image}
                keyIndex={i}
                index={index}
              />
            );
          })}
        </Carousel>
        <div className={styles.arrowRight} onClick={slideRight}>
          <img src={grayArrowRight} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainServices;
