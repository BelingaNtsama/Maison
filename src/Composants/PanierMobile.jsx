import '../Styles/PanierMobile.css'
import Carte from './CarteMobile'

export default function Panier({ liste, setListe, Nombre, setNombre, Total, setTotal, ouverture, setOuverture }) {

    const fermer = () => {
        setOuverture(true)
    }


    const Ouvrir = () => {
        setOuverture(false)
       
    }





    return <div className='PanierMobile'>{ouverture === true ?
        <div className='Panier_fermer'> <span title='Ouvrir le panier' class="material-symbols-outlined" id='ouvrir' onClick={Ouvrir}>
            shopping_cart
        </span></div>
        :

        <div className='Panier_ouvert'>
            <span onClick={fermer} class="material-symbols-outlined">
                close
            </span>

            <Carte liste={liste} setListe={setListe} Nombre={Nombre} setNombre={setNombre}
                setTotal={setTotal} Total={Total} ouverture={ouverture} setOuverture={setOuverture} />
        </div>
    }
    </div>
}