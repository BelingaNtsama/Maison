import NavBar from '../Composants/NavBar'
import '../Styles/Services.css'
import NavMobile from './NavMobile'

export default function Services() {

    return <div>
        {

            window.matchMedia("(max-width: 768px)").matches ? <NavMobile /> : <NavBar />
        }

        <div className='cadre_titre'>
            <div className='Title'></div><h1>Services</h1><div className='Title'></div>
        </div>

        <div className='Services'>
            <div>
                <span class="material-symbols-outlined">
                    potted_plant
                </span>
                <h2>Conseils personnalises</h2>
                <p>Notre équipe d'experts vous guide dans le choix des plantes les plus adaptées à vos besoins et à votre environnement.</p>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    potted_plant
                </span>
                <h2>Service de livraison</h2>
                <p> Nous livrons vos plantes partout au Cameroun.</p>
            </div>
            <div>
                <span class="material-symbols-outlined">
                    potted_plant
                </span>
                <h2>Service d'entretien</h2>
                <p> Nous proposons des contrats d'entretien pour vos plantes, afin qu'elles restent belles et en bonne santé.</p>
            </div>
        </div>
    </div>
}