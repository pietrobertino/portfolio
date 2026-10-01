import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import HeroSpace from "../components/HeroSpace"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import AboutSection from "../components/AboutSection"
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
            <AppHeader />
            <div className="page-scroll">
                <main>
                    <HeroSpace />
                    <ProjectsSection />
                    <SkillsSection />
                    <AboutSection />
                    <ContactsSection />
                </main>
                <AppFooter />
            </div>
        </>
    )
}