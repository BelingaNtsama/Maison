import { useState, useEffect } from "react"
import '../Styles/CarteMobile.css'
import logo_achat from '../images/logo_achat.png'



export default function CarteMobile({ liste, setListe, Nombre, setNombre, Total, setTotal, ouverture, setOuverture }) {
    const [liste_panier, setListe_panier] = useState([])

    useEffect(() => {
        function obtenirOccurrenceMax(tableau) {
            const occurrences = new Map();


            for (let i = 0; i <= tableau.length - 1; i++) {
                const item = tableau[i];

                for (let j = i; j <= tableau.length - 1; j++) {
                    if (!occurrences.get(item.nom)) {
                        if (i === j) {
                            occurrences.set(tableau[j].nom, tableau[j].nombre)
                        }
                        else if (item.nom === tableau[j].nom && i < j) {
                            occurrences.set(tableau[j].nom, tableau[j].nombre)
                        }

                    }
                }
            }


            return Array.from(occurrences);

        }

        setListe_panier(obtenirOccurrenceMax(liste))

    }, [Total, liste])

    const Vider = () => {
        setTotal(0)
        setListe([])
        setNombre(0)
        setOuverture(true)
    }

    return Total <= 0 ? <h2 style={{textAlign:'center'}}>Panier vide</h2> : <div className="cadre_carteMobile">
        <h2>Panier : </h2>
        <div className="resultat">
            <div>
                <img className="logo_achat" src={logo_achat} alt=""></img>
                <table>
                    {

                        Array.from(liste_panier).map((element) => <tr><td>{element[0]}</td><td>{element[1]}</td></tr>)
                    }

                </table>
            </div>
        </div>

        <div>

            <h2>Total :{Total + "$"}</h2>
            <div className="bouttons_panier">
                <button onClick={Vider} className="Vider">Vider le panier</button>
                <button className="valider">Valider l'achat</button>
            </div>
        </div>
    </div>
}