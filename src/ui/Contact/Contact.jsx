import contactStyles from './Contact.module.css' 
import bigStar from "../../assets/bigStar.svg" 
import InputComponent from '../../components/InputComponent/InputComponent'
 
function Contact(){ 
  return ( 
    <section className={contactStyles.container}> 
      <div className={contactStyles.data}> 
        <h2>Ստացիր <span>անվճար</span> խորհրդատվություն</h2> 
        <form className={contactStyles.form}> 
          <InputComponent placeholder='Անուն, Ազգանուն'/>
          <InputComponent placeholder='Հեռախոսահամար'/>
          <InputComponent placeholder='Էլ․ հասցե'/>
          <button>Ուղարկել</button> 
        </form> 
 
      </div> 
      <div className={contactStyles['img-container']}> 
        <img src={bigStar} /> 
      </div>    
    </section> 
  ) 
} 
 
export default Contact