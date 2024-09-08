import { Link } from "react-router-dom";
import '../Styles/NavMobile.css'
import Ts_jungle from '../images/TS_Jungle.svg'
import { useEffect, useState } from "react";



export default function NavMobile() {

    let a = document.getElementsByClassName('lien')
    
    const [url, setURL] = useState("/")

    const Chemins = ["/About", "/Aides", "/Services", "/Contact"]
    useEffect(() => {
        setURL(window.location.pathname)
        if (url !== "/") {
            for (let i = 0; i <= a.length - 1; i++) {
                if (Chemins[i] === url) {
                    a[i].classList.add('active')
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url !== "/"])

    const Menu = document.getElementsByClassName('Menu')
    const cadre = document.getElementsByClassName("cadre_liens_mobile")
    function Afficher() {
        if (cadre[0].classList.contains('cadre_liens_mobile_active')) {
            cadre[0].classList.remove('cadre_liens_mobile_active')
            cadre[0].classList.add('cadre_liens_mobile_reverse')
            Menu[0].classList.toggle('Menu_block')
        } else {
            Menu[0].classList.toggle('Menu_block')
            cadre[0].classList.add('cadre_liens_mobile_active')
            cadre[0].classList.remove('cadre_liens_mobile_reverse')
        }
    }

    return <div className="cadre_nav"><nav>
        <div className="logo"><img src={Ts_jungle} className="Titre" alt="logo" /><h1><Link to={"/"}>La maison Jungle</Link> </h1></div>
        <div className="cadre_liens_mobile" onClick={() => Afficher()}>
            <div className="bouton_lien"></div>
            <div className="bouton_lien"></div>
            <div className="bouton_lien"></div>
        </div>

    </nav>
        <div className="Menu">
            <ul>
                <Link className="lien" to={"/About"}>About</Link>
                <Link className="lien" to={"/Aides"}>Help</Link>
                <Link className="lien" to={"/Services"}>Services</Link>
                <Link className="lien" to={"/Contact"}>Contact</Link>
            </ul>


        </div>
    </div>

}