import styles from './We.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

function We(params) {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOut' animateOnce="true"> <h2>ԱՀԱ ԵՎ ՄԵՆՔ</h2> </ScrollAnimation>
                <p>Հրաշալի մասնագետների ֆորմուլա մեկ վայրում, կրեատիվ և ստեղծարար թիմ։
                    Մեր նպատակն է Մեր նպատակն է  Մեր նպատակն է  Մեր նպատակն է
                </p>
            </div>
            <div className={styles.imgContainer}></div>
        </section>
    )
}

export default We