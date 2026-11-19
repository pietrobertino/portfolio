import { useLanguage } from "../contexts/LanguageContext"
import { Link } from "react-bootstrap-icons";

export default function AppFooter() {

    const { t, lang } = useLanguage();

    return (
        <footer>
            <div className="container d-flex flex-wrap justify-content-between gap-2 py-5">
                <span>© 2026 Pietro Bertino</span>
                <span>{t.footer.stack}</span>


                <Link to={`/${lang}`} end>Home</Link>
                <Link to={`/${lang}/projects`}>Progetti</Link>
                <Link to={`/${lang}/about`}>Su di me</Link>

                <a href="https://www.linkedin.com/in/pietro-bertino-60a0342a5/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com/pietrobertino" target="_blank" rel="noopener">GitHub</a>
            </div>
        </footer>
    )
}