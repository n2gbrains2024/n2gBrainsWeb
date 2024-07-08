import styles from "./LandingComponent.module.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

function LandingComponent(){
    return (
        <div className={styles.landingDiv}>
        <ScrollAnimation animateIn="zoomInUp" animateOut="zoomOut" className={styles.videoContainer} animateOnce="true">
            <video className={styles.player} src='videos/video.mp4' controls />
        </ScrollAnimation>
        <ScrollAnimation animateIn="backInUp" animateOut="backOutUp" className={styles.texts} animateOnce="true">
            <h1 className={styles.title}>Սովորի՛ր արդի մասնագիտություն</h1>
            <p>
                Կառուցիր ապագադ մեզ հետ Կառուցիր ապագադ մեզ հետ Կառուցիր ապագադ մեզ հետԿառուցիր ապագադ մեզ հետ
            </p>
            <button>Բոլոր դասընթացները</button>
        </ScrollAnimation>
    </div>
    )
}

export default LandingComponent