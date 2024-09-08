import { toast, Toaster } from "sonner";
import '../Styles/Contact.css'
import logo from '../images/TS_Jungle.svg'
import NavBar from "./NavBar";
import NavMobile from "./NavMobile";


const date = new Date()
let hours = date.getHours();


export default function Footer() {

    return hours <= 22 && hours >= 5 ? <div className="form">{

        window.matchMedia("(max-width: 768px)").matches ? <NavMobile /> : <NavBar />
    }



        <h2>Veuillez ecrire tout ce qui peut vous deranger ou ce qu'il y a a ameliorer dans notre plateforme</h2>

        <form onSubmit={() => { toast.success("Vos donnees ont ete parfaitement bien traitees") }}>
            <div className="input">
                <input type="text" maxLength={40} placeholder="Entrez votre nom.." required />
                <input maxLength={20} type="email" placeholder="Exemple@gmail.com" required></input>
                <textarea maxLength={300} placeholder="Zone de texte..." />
            </div>
            <div className="cadre_bouton">

                <button className="bouton">Envoyer</button>
                <button style={{ backgroundColor: 'rgba(0, 0, 0, 0.231)', color: "black" }} type="reset">Effacer</button>
            </div>
        </form>

        <div className='cadre_titre_services'>
            <div className='Title'></div><h1 className="h1_Title">Autres contacts</h1><div className='Title'></div>
        </div>


        <footer>

            <div>
                <a href="https://www.facebook.com/aliyoum.dg.1"><i class='bx bxl-facebook-circle'></i></a>


                <a href="https://wa.me/237697420544"> <i class='bx bxl-whatsapp'></i></a>


                <a href="g@gmail.com"> <i class='bx bxl-gmail'></i></a>


            </div>

        </footer>


        <Toaster richColors closeButton position="top-center" />

    </div>

        :

        <div className="inactivite"><h1>Nous ne sommes pas disponible a plus de 22h</h1>
            <p style={{ fontSize: '20px', textAlign: "center", fontWeight: 'bold' }}>Nous serons de nouveau disponible d'ici 5h en GMT+1, nous vous disons a bientot !</p>
            <img src={logo} alt="Logo de Ts_shop" />
        </div>

}