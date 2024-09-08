import { toast } from 'sonner'
import '../Styles/Plantes.css'
import { useState, useEffect } from 'react'


export default function Plante({ props }) {
    let Total = props[1]
    let setTotal = props[2]
    let liste = props[5]
    let setListe = props[6]
    let prix = props[0].prix
    let ouverture = props[7]


    // Exemple d'utilisation

    const [unable, setunable] = useState(false)

    const [nombre_local, setnombre_local] = useState(0)
    const [Total_local, setTotal_local] = useState(0)

    const [plante, setplante] = useState({ nom: "", nombre: undefined, prix })


    const [fois, setfois] = useState(0)



    useEffect(() => {
        if (fois <= 2) {
            setunable(true)
            toast.success(nombre_local <= 1 ? <span>{nombre_local} exemplaire de la {props[0].name} a ete retenu</span> :
                <span>{nombre_local} exemplaires de la fleur {props[0].name} ont ete retenus</span>)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fois === 2])

    useEffect(() =>
        setnombre_local(0),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [Total === 0])


    useEffect(() => {
        setTotal_local(0)
        setTotal(0)
        setnombre_local(0)
        setunable(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ouverture === true])

    function changer(e, nombre) {
        e.preventDefault()



        setTotal_local(prix * nombre)
        setnombre_local(nombre);
        setnombre_local(nombre);

        setTotal(Total + Total_local)
        setplante({ nom: props[0].name, nombre: nombre, prix })
        let copyListe = liste
        copyListe.push(plante)
        setListe(copyListe)
        setfois(fois + 1)

    }

    function Revenir() {
        setunable(false)
        setfois(0)
        setnombre_local(0)
        setTotal_local(0)
        setTotal(Total - Total_local)
        toast.info(<div><p>Bien que sur le panier, cela est encore affiche, rassurez-vous que le montant a ete deduit</p>
            <br />
            <p>Veuillez saisir une nouvelle valeur et constatez par vous-meme !</p>
            </div>)
    }





    return !ouverture ? <div className="plante" key={props[0].id}>

        <img src={props[0].photo} alt={props[0].name} title={props[0].name} />
        <p>{props[0].prix + "$"}</p>
        <h2>{props[0].name}</h2>

        <form onSubmit={(e) => changer(e, e.currentTarget[0].value)} >
            <div className="choix">
                <input className="input_shop" min={1} disabled={unable} placeholder="Ajouter..." type="number" />
            </div>
            <div className="Boutons">
                <input className='ajouter' disabled={unable} type="submit" value={"Confirmer"} />
                <button className="reinitialiser" onClick={Revenir} type="reset" >Retirer</button >
            </div>
        </form>



    </div> : <div className="plante" key={props[0].id}>

        <img src={props[0].photo} alt={props[0].name} title={props[0].name} />
        <p>{props[0].prix + "$"}</p>
        <h2>{props[0].name}</h2>

        <form onSubmit={(e) => changer(e, e.currentTarget[0].value)} >
            <div className="choix">
                <input className="input_shop" min={1} value={0} disabled={unable} placeholder="Ajouter..." type="number" />
            </div>
            <div className="Boutons">
                <input className='ajouter' disabled={unable} type="submit" value={"Confirmer"} />
                <button className="reinitialiser" onClick={Revenir} type="reset" >Retirer</button >
            </div>
        </form>



    </div>
}