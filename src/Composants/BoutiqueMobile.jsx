import Monstera from '../images/monstera.ec0819da.jpg'
import Ficus from '../images/lyrata.2e915120.jpg'
import basil from '../images/basil.be00474e.jpg'
import Pothos from '../images/pothos.d72dc0ac.jpg'
import Calathea from '../images/calathea.455c33e2.jpg'
import Olivier from '../images/olivier.b2908b40.jpg'
import cactus from '../images/cactus.a71c2062.jpg'
import succulent from '../images/succulent.f4329849.jpg'
import menthe from '../images/mint.b83a3d2e.jpg'
import PlanteMobile from './PlanteMobile'

import '../Styles/BoutiqueMobile.css'
import { useState } from 'react'


export default function BoutiqueMobile({ liste, setListe, Nombre, setNombre, Total, setTotal, ouverture, setOuverture }) {
    const plantList = [{
        name: 'Monstera',
        category: 'classique',
        id: 1,
        prix: 15,
        photo: Monstera
    }, {
        name: 'Ficus Lyrata',
        category: 'classique',
        id: 2,
        prix: 16,
        photo: Ficus
    }, {
        name: 'pothos argente',
        category: 'classique',
        id: 3,
        prix: 9,
        photo: Pothos
    }, {
        name: 'Calathea',
        category: 'classique',
        id: 4,
        prix: 20,
        photo: Calathea
    }, {
        name: 'Olivier',
        category: 'exterieure',
        id: 5,
        prix: 25,
        photo: Olivier
    }, {
        name: 'Cactus',
        category: 'grasse',
        id: 6,
        prix: 6,
        photo: cactus
    }, {
        name: 'Basilique',
        category: 'exterieure',
        id: 7,
        prix: 5,
        photo: basil
    }, {
        name: 'Succulente',
        category: 'grasse',
        id: 8,
        prix: 8,
        photo: succulent
    }, {
        name: 'Menthe',
        category: 'exterieure',
        id: 9,
        prix: 4,
        photo: menthe
    }]



    const category = plantList.reduce((acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
        [])

    const [categorie, setCategorie] = useState("")

    const [nom, setNom] = useState("")


    const handleCategory = (e) => {
        setTimeout(() => setCategorie(e.target.value), 500)

    }

    const handleNom = (e) => {
        setTimeout(() => setNom(e.target.value), 500)

    }

    return <div className='BoutiqueMobile'>
        <form className='search'>
            <div>
                <label for='Categorie' >Recherche par categorie : </label>
                <input id='Categorie' placeholder='Categorie rechercher...' onChange={handleCategory} list='categorie' />
                <datalist id='categorie'>
                    {category.map((element) => <option value={element}></option>)}
                </datalist>
            </div>
            <div>
                <label >Recherche par nom : </label>
                <input placeholder='Nom rechercher...' onChange={handleNom} list='nom' />
                <datalist id='nom'> {plantList.map((element) => <option value={element.name}></option>)}</datalist>
            </div>
        </form>
        <div className='cadre_plantes'>
            
                {plantList.filter((plante) => categorie != "" ? plante.category.toLowerCase().includes(categorie.toLowerCase()) :
                    plante.category != undefined).filter((plante) => plante.name.toLowerCase().includes(nom.toLowerCase())).map((plante) =>
                        <PlanteMobile props={[plante, Total, setTotal, Nombre, setNombre, liste, setListe, ouverture, setOuverture]} />)
                }
            
        </div>

    </div>
}