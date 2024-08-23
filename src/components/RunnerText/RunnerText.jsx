import styles from "./RunnerText.module.css";
import svg from "../../assets/greenLittleStar.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RunnerText() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: true,
    showDots: false,
    arrows: false,
    autoPlaySpeed: 20,
    customTransition: "all 2000ms linear",
    containerClass: styles.runnerTextSlider,
    itemClass: styles.item,
    transitionDuration: 2000,
    pauseOnHover: false,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 440 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 440, min: 0 },
        items: 1,
      },
    },
  };
  return (
    <div className={styles.container}>
      <Carousel {...settings}>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
        <div>
          <p>Սկսիր հիմա</p>
          <p>Սկսիր հիմա</p>
          <img src={svg} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default RunnerText;
