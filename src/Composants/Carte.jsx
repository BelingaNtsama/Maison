import { useState, useEffect } from "react"
import '../Styles/Carte.css'
import '../Styles/Carte.css'
import logo_achat from '../images/logo_achat.png'
import { Link } from "react-router-dom"


export default function Carte({ liste, setListe, Nombre, setNombre, Total, setTotal, ouverture,setOuverture }) {
    const [Ouvert, setOuvert] = useState(true)
    const [plantes, setPlantes] = useState([])
    const [liste_panier, setListe_panier] = useState()

    useEffect(() => {
        function obtenirOccurrenceMax(tableau) {
            const occurrences = new Map();


            for (let i = 0; i <= tableau.length - 1; i++) {
                const item = tableau[i];

                for (let j = i; j <= tableau.length - 1; j++) {
                    if (!occurrences.get(item.nom)) {
                        if (i = j) {
                            occurrences.set(tableau[j].nom, tableau[j].nombre)
                        }
                        else if (item.nom == tableau[j].nom && i < j) {
                            occurrences.set(tableau[j].nom, tableau[j].nombre)
                        }

                    }
                }
            }


            return Array.from(occurrences);

            // Maintenant, nous avons une Map avec les occurrences maximales pour chaque clé
            return occurrences;
        }

        setListe_panier(obtenirOccurrenceMax(liste))
    }, [Total])

    const Vider = () => {
        setTotal(0)
        setListe([])
        setNombre(0)
        setOuverture(true)
    }

    return Ouvert && Total <= 0 ? <h2>Panier vide</h2>  : <div className="cadre_carte">
        <h2>Panier : </h2>
        <img className="logo_achat" src={logo_achat}></img>

        <table>
            {

                Array.from(liste_panier).map((element) => <tr><td>{element[0]}</td><td>{element[1]}</td></tr>)
            }

        </table>
        <div>

        <h2>Total :{Total + "$"}</h2>
        <div className="bouttons_panier">
            <button onClick={Vider} className="Vider">Vider le panier</button>
            <button className="valider"><Link to={'/Paiement'}>Valider l'achat</Link></button>
        </div>
    </div>
    </div>
}