import styles from "./Particle.module.css";
import UseIsInViewport from "../../helpers/UseIsInViewport.js";

function Particle({
  children,
  hasRadius = true,
  rotation = 0,
  top,
  transitionDuration = 200,
  elementRef,
}) {
  const isInViewport = UseIsInViewport(elementRef);
  const getFallingStyles = (isFallingInViewPort) => ({
    transition: `all ${transitionDuration}ms ease-in`,
    marginTop: isFallingInViewPort ? top + "px" : "0",
    transform: isFallingInViewPort
      ? "rotateZ(0deg)"
      : `rotateZ(${rotation}deg)`,
  });

  return (
    <div
      className={`${styles.particle} ${hasRadius ? styles.roundParticle : ""}`}
      style={getFallingStyles(isInViewport)}
    >
      {children}
    </div>
  );
}

export default Particle;
