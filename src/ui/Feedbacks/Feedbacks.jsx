import styles from "./Feedbacks.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import Feedback from "../../components/Feedback/Feedback";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Feedbacks() {
  const settings = {
    draggable: false,
    infinite: true,
    autoPlay: true,
    showDots: false,
    arrows: false,
    containerClass: "feedbacksSlider",
    itemClass: "item",
    autoPlaySpeed: 300,
    transitionDuration: 1000,
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
  const feedbacks = [
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Աբ Աբրահամյան",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Աբ Աբրահամյան",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Աբ Աբրահամյան",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Աբ Աբրահամյան",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Աբ Աբրահամյան",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
    {
      comment:
        "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։",
      user: "Ab Abrahamyan6",
      courseTitle: "FrontEnd ծրագրավորում դասընթաց",
      image: "a",
    },
  ];
  return (
    <div className={styles.container}>
      <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
        <h1>Կարծիքներ մեր մասին</h1>
      </ScrollAnimation>
      <p>
        Մեր աշակերտների գոհ և շնորհակալ կարծիքները լավագույն գնահատականն են մեզ
        համար։
      </p>
      <div className={styles.feedbacks}>
        <div
          className={`${styles.whiteShadow} ${styles.whiteShadowLeft}`}
        ></div>
        <Carousel {...settings}>
          {feedbacks.map((feedback, index) => {
            return (
              <Feedback
                comment={feedback.comment}
                user={feedback.user}
                courseTitle={feedback.courseTitle}
                image={feedback.image}
              />
            );
          })}
        </Carousel>
        <div
          className={`${styles.whiteShadow} ${styles.whiteShadowRight}`}
        ></div>
      </div>
    </div>
  );
}

export default Feedbacks;
