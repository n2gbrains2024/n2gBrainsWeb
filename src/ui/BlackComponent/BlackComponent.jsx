import styles from "./BlackComponentStyle.module.css";
import backroundImage from "../../assets/blackBackgroundImage.png";
import "./BlackComponentStyle.module.css";
import Particle from "../../components/Particle/Particle";
import { useRef } from "react";
function BlackComponent() {
  const elementRef = useRef();
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('${backroundImage}')` }}
    >
      <h1>Մեր աշխատանքի ոճը</h1>
      <div className={styles.particles} ref={elementRef}>
        <div className={styles.row}>
          <Particle top={430} transitionDuration={300} elementRef={elementRef}>
            Հասանելիություն
          </Particle>
          <Particle
            rotation={-7.28}
            top={430}
            transitionDuration={400}
            elementRef={elementRef}
          >
            Ժամանակի ճիշտ կառավարում
          </Particle>
          <Particle top={410} transitionDuration={350} elementRef={elementRef}>
            Offline
          </Particle>
        </div>
        <div className={styles.row}>
          <Particle top={355} rotation={-6.48} elementRef={elementRef}>
            Online
          </Particle>
          <Particle top={275} hasRadius={false} elementRef={elementRef}>
            Պրոֆեսիոնալ մոտեցում
          </Particle>
          <Particle
            top={295}
            hasRadius={false}
            rotation={8.51}
            elementRef={elementRef}
          >
            Կազմակերպվածություն
          </Particle>
          <Particle top={295} rotation={-12.92} elementRef={elementRef}>
            Որակ
          </Particle>
        </div>
      </div>
    </div>
  );
}
export default BlackComponent;
