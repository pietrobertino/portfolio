import HeroSpace from "../components/HeroSpace"
import ProjectsSection from "../components/ProjectsSection"
import ServicesSection from "../components/ServicesSection"
import ContactsSection from "../components/ContactsSection"
import { useLanguage } from "../contexts/LanguageContext"
import { useParams, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { usePage } from "../contexts/PageContext"

export default function HomePage() {

    const { lang } = useParams();
    const location = useLocation();

    const { setLang } = useLanguage();
    const { setHomePage } = usePage();

    useEffect(() => {
        setLang(lang);
        setHomePage(true);

        // Controlla se c'è un ID salvato nello stato della navigazione
        if (location.state?.scrollToId) {
            const id = location.state.scrollToId;

            // Un leggero timeout assicura che il DOM sia completamente pronto
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            // Pulisci lo stato per evitare che ri-scrolli se l'utente aggiorna la pagina
            window.history.replaceState({}, document.title);
        }
    }, [location])


    return (
        <>



            <HeroSpace />
            <ServicesSection />
            <ProjectsSection />
            <ContactsSection />



        </>
    )
}