import menuStyles from "./Menu.module.css"
import { Link } from 'react-router-dom';
function Menu() {
    return (
        <div className={menuStyles.menu}>
            <div>
                <Link to="/">Գլխավոր</Link>
                <Link to="/services">Ծառայություններ</Link>
                <Link to="/portfolio">Պորտֆոլիո</Link>
                <Link to="/team">Թիմ</Link>
                <Link to="/about">Մեր մասին</Link>
                <Link to="/contact">Կապ մեզ հետ</Link>
            </div>
        </div>
    )
}

export default Menu