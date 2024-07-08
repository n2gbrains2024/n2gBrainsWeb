import styles from "./Feedbacks.module.css"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Feedback from "../../components/Feedback/Feedback";

function Feedbacks(){
    const feedbacks = [
        {
            comment: "Ես խորհուրդ եմ տալիս N2G Brains-ը ՝ որպես հիանալի վայր ծրագրավորում սովորելու համար: Այստեղ աշխատում են իրենց ոլորտի մասնագետները, ովքեր միշտ պատրաստ են օգնել և կիսվել իրենց գիտելիքներով։ N2G Brains-ը իսկապես փորձում է ամեն ինչ անել, որպեսզի ուսանողները բարձր մակարդակով սովորեն ծրագրավորում:",
            user: "Ab Abrahamyan",
            courseTitle: "FrontEnd ծրագրավորում դասընթաց",
            image: "a"
        }
    ]
    return (
        <div className={styles.container}>
                <ScrollAnimation animateIn='fadeInRight' animateOut='fadeOut' animateOnce="true">
                    <h1>Կարծիքներ մեր մասին</h1>
                </ScrollAnimation>
                <p>Մեր աշակերտների գոհ և շնորհակալ կարծիքները լավագույն գնահատականն են մեզ համար։</p>
                <div className={styles.feedbacks}>
                    {
                        feedbacks.map((feedback,index)=>{
                            return (
                                <Feedback comment={feedback.comment} user={feedback.user} courseTitle={feedback.courseTitle} image={feedback.image}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Feedbacks