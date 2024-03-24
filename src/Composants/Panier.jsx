import { useState } from 'react'
import '../Styles/Panier.css'
import Carte from './Carte'

export default function Panier({ liste, setListe, Nombre, setNombre, Total, setTotal,ouverture,setOuverture }) {

    const fermer = () => {
        setOuverture(true)
        setListe([])
        setNombre(0)
        setTotal(0)
    }


    const Ouvrir = () => {
        setOuverture(false)
        setTotal(0)
        setNombre(0)
        setListe([])

    }

  



    return <div className='Panier'>{ouverture === true ?
        <div className='Panier_fermer'><button onClick={() => Ouvrir()}>Ouvrir le panier</button></div>
        :

        <div className='Panier_ouvert'>
            <button onClick={() => fermer()}>Fermer le panier</button>

            <Carte liste={liste} setListe={setListe} Nombre={Nombre} setNombre={setNombre} 
            setTotal={setTotal} Total={Total} ouverture={ouverture} setOuverture={setOuverture} />
        </div>
    }
    </div>
}