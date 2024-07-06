import miniLogo from "../../assets/miniLogo.svg"
import callSvg from "../../assets/call.svg"
import fbCircle from "../../assets/fbCircle.svg"
import igCircle from "../../assets/igCircle.svg"
import lkCircle from "../../assets/lkCircle.svg"
import headerStyles from "./Header.module.css"

function Header() {
    return (
        <div className={headerStyles.header}>
            <div>
                <img src={miniLogo} className={headerStyles.miniLogo} alt="" />
                <div className={headerStyles.info}>
                    <a href="https://www.fb.com/n2gbrains" target="_blank"><img className={headerStyles.icon} src={fbCircle} /></a>
                    <a href="https://www.instagram.com/n2gbrains" target="_blank"><img className={headerStyles.icon} src={igCircle} /></a>
                    <a href="#" target="_blank"><img className={headerStyles.icon} src={lkCircle} /></a>
                    <a href="tel:+37496691949">
                        <div className={headerStyles.phone}>
                            <img src={callSvg} alt="" />
                            <span>(096) 691949</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header