import '../Styles/About.css'
import NavBar from './NavBar'
import NavMobile from './NavMobile'

export default function About() {

    return <>
        {

            window.matchMedia("(max-width: 768px)").matches ? <NavMobile /> : <NavBar />
        }

        <div className='About'>

            <h2>Nom de l'entreprise : La maison Jungle</h2>

            <p>Slogan : <strong>Repousser les limites de la satisfaction</strong></p>

            <p>Activité : <strong>Vente de plantes décoratives, intérieures et extérieures, pour embellir votre maison et votre jardin.</strong></p>

            <h2>Notre mission :</h2>

            <p>Rendre la beauté des plantes accessible à tous, et contribuer à créer des intérieurs et des jardins plus sains et plus harmonieux.</p>

            <h2>Nos valeurs :</h2>

            <p>Passion pour les plantes : Nous sommes passionnés par les plantes et nous partageons notre expertise avec nos clients.</p>
            <p>Respect de l'environnement : Nous nous engageons à proposer des produits et services durables et respectueux de l'environnement.</p>
            <p>Satisfaction client : Nous sommes soucieux de la satisfaction de nos clients et nous offrons un service client de qualité.</p>
            <h2>Pourquoi choisir <i>La maison jungle</i> ?</h2>

            <p>Large choix de plantes : Nous proposons une large sélection de plantes pour répondre à tous vos besoins et à tous vos goûts.</p>
            <p>Conseils personnalisés : Notre équipe d'experts est à votre disposition pour vous guider dans le choix des plantes les plus adaptées à votre situation.</p>
            <p>Service de qualité : Nous offrons un service de qualité, de la commande à la livraison, en passant par l'entretien de vos plantes.</p>
            <p>Engagement environnemental : Nous sommes engagés dans une démarche de développement durable et nous respectons l'environnement.</p>
            <h2>La maison jungle : Votre partenaire pour des plantes décoratives de qualité !</h2>
        </div>
    </>
}