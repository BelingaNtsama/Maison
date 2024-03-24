import './App.css';
import NavBar from './Composants/NavOrdi';
import Description from './Composants/Descriptions';
import Panier from './Composants/Panier';
import Boutique from './Composants/Boutique';
import { useState } from 'react';
import { Toaster } from 'sonner';
import NavMobile from './Composants/NavMobile';
import BoutiqueMobile from './Composants/BoutiqueMobile';
import PanierMobile from './Composants/PanierMobile'
import Loader from './Composants/loader';


function App() {


   
    const [Total, setTotal] = useState(0)
    const [nombre, setNombre] = useState(0)
    const [ouverture, setOuverture] = useState(true)
    const [liste, setListe] = useState([])

    return window.matchMedia("(min-width: 768px)").matches ? <div>
      
   <Loader/>
        <NavBar />
        <Description />

        <div className='Boutique_panier'>

            <Panier liste={liste} setListe={setListe} Total={Total} setTotal={setTotal} Nombre={nombre}
                setNombre={setNombre} ouverture={ouverture} setOuverture={setOuverture} />

            <Boutique liste={liste} setListe={setListe}
                Total={Total} setTotal={setTotal} Nombre={nombre} setNombre={setNombre}
                ouverture={ouverture} setOuverture={setOuverture} />

        </div>
        <Toaster closeButton richColors position='top-center' />
    </div>

        :
        <div>
            <NavMobile />
            <Loader/>
            <Description />
            <BoutiqueMobile liste={liste} setListe={setListe}
                Total={Total} setTotal={setTotal} Nombre={nombre} setNombre={setNombre}
                ouverture={ouverture} setOuverture={setOuverture} />


            <PanierMobile liste={liste} setListe={setListe}
                Total={Total} setTotal={setTotal} Nombre={nombre} setNombre={setNombre}
                ouverture={ouverture} setOuverture={setOuverture} />


            <Toaster closeButton richColors position='top-center' />
        </div>

}


export default App;
