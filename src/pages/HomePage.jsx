import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import HeroSpace from "../components/HeroSpace"
import ProjectsSection from "../components/ProjectsSection"
import SkillsSection from "../components/SkillsSection"
import AboutSection from "../components/AboutSection"
import ContactsSection from "../components/ContactsSection"

export default function HomePage() {
    return (
        <>
            <AppHeader />
            <div class="page-scroll">
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