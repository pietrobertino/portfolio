import { useLanguage } from "../contexts/LanguageContext"
import LanguageToggle from "./LanguageToggle";
import { Link } from "react-router-dom";

export default function AppHeader() {

    const { t, lang } = useLanguage()
    const text = t.header;

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <header className='site-header'>
            <nav className="navbar navbar-expand-md py-3">
                <div className="container">
                    <a className="brand navbar-brand" href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Pietro Bertino</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu"
                        aria-expanded="false" aria-label="Apri il menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                        <ul className="navbar-nav gap-md-4">
                            <li className="nav-item"><a className="nav-link" href="#competenze" onClick={(e) => handleScroll(e, 'competenze')}>{text.services}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#progetti" onClick={(e) => handleScroll(e, 'progetti')}>{text.projects}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contatti" onClick={(e) => handleScroll(e, 'contatti')}>{text.contact}</a></li>
                            <li className="nav-item"><Link className="nav-link" to={`/${lang}/about`}>{text.about}</Link></li>
                            <li className="nav-item mt-3 mt-md-0 ms-md-2"><LanguageToggle /></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}