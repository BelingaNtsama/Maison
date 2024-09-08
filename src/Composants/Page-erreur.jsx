import { useRouteError, Link, useNavigate } from "react-router-dom";
import '../Styles/Page_erreur.css'
import { Toaster, toast } from "sonner";
export default function PageErreur() {
    const error = useRouteError();
    console.error(error);
    const navigate = useNavigate()
    let compteur = 5
    function Retourner(e) {
        e.preventDefault()
        const id = window.setInterval(() => {
            toast.success(<span>Vous serez renvoyez dans la page d'accueil d'ici  {compteur = compteur - 1}</span>)
        }, 500)

        window.setTimeout(() => {
            navigate("/")
            window.clearInterval(id)
        }, 3000)

       
    }

    return (
        <div className="error-page">
            <h1>Page d'erreur !</h1>
            <h2>Il s'agit de votre url qui n'est pas correcte</h2>
            <h3>Veuillez cliquer sur le lien ci-dessous pour revenir a la page d'accueil </h3>
            <Link onClick={(e) => Retourner(e)} to={'/'}>accueil</Link>
            <Toaster richColors position="top-center" />
        </div>
    );
}