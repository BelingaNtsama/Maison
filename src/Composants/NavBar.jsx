import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import '../Styles/NavBar.css'
import TS_jungle from '../images/TS_Jungle.svg'

export default function NavBar_ordi() {

    const b=document.getElementsByClassName("lien")

    const [url, setURL] = useState("/")

    const Chemins = ["/About", "/Aides", "/Services", "/Contact"]
    useEffect(() => {
            setURL(window.location.pathname)
            if (url !== "/") {
                    for (let i = 0; i <= b.length - 1; i++) {
                            if (Chemins[i] === url) {
                                    b[i].classList.add('active')
                            }
                    }
            }


    }, [url !== "/"])
    
    return <div className="nav">

        <nav>
            <div className="logo">
                <img src={TS_jungle} alt="logo" />
                <Link to={"/"}>La maison Jungle</Link>
            </div>

            <ul>
                <li><Link className="lien" to={"/About"}>A propos</Link></li>
                <li><Link className="lien" to={"/Aides"}>Aides</Link></li>
                <li><Link className="lien" to={"/Services"}>Services</Link></li>
                <li><Link className="lien" to={"/Contact"}>Contact</Link></li>
            </ul>
        </nav>

    </div>
}