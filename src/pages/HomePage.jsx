import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import HeroSpace from "../components/HeroSpace"
import ProjectsSection from "../components/ProjectsSection"
import ServicesSection from "../components/ServicesSection"
import ContactsSection from "../components/ContactsSection"
import { useLanguage } from "../contexts/LanguageContext"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function HomePage() {

    const { lang } = useParams();

    const { setLang } = useLanguage();

    useEffect(() => {
        setLang(lang);
    }, [])


    return (
        <>



            <HeroSpace />
            <ServicesSection />
            <ProjectsSection />
            <ContactsSection />



        </>
    )
}