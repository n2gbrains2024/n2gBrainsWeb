import styles from './Students.module.css'
import student1 from '../../assets/studentImages/img1.svg'
import student2 from '../../assets/studentImages/img2.svg'
import student3 from '../../assets/studentImages/img3.svg'
import student4 from '../../assets/studentImages/img4.svg'
import student5 from '../../assets/studentImages/img5.svg'
import student6 from '../../assets/studentImages/img6.svg'
import student7 from '../../assets/studentImages/img7.svg'
import student8 from '../../assets/studentImages/img8.svg'


function Students() {

    const students = [student1, student2, student3, student4, student5, student6, student7, student8]

    return (
        <section className={styles.container}>
            <div className={styles.firstContainer}>
                <h1>Դարձիր մեր լավագույն</h1>
                <h2>Ուսանողը</h2>
            </div>
            <div className={styles.studentContainer}>
                {students.map((student, index) => {
                    return (
                        <img key={index} src={student} alt=""/>
                    )
                })}
            </div>
        </section>
    )
}
export default Students