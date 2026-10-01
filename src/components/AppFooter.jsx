import { useLanguage } from "../contexts/LanguageContext"

export default function AppFooter() {

    const { t } = useLanguage();

    return (
        <footer>
            <div className="container d-flex flex-wrap justify-content-between gap-2 py-5">
                <span>© 2026 Pietro Bertino</span>
                <span>{t.footer.stack}</span>
            </div>
        </footer>
    )
}