import { useLanguage } from "../contexts/LanguageContext"

export default function AppHeader() {

    const { t } = useLanguage()
    const text = t.header;


    return (
        <header className='site-header'>
            <nav className="navbar navbar-expand-md py-3">
                <div className="container">
                    <a className="brand navbar-brand" href="#hero">Pietro Bertino</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu"
                        aria-expanded="false" aria-label="Apri il menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                        <ul className="navbar-nav gap-md-4">
                            <li className="nav-item"><a className="nav-link" href="#progetti">{text.projects}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#competenze">{text.skills}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#chi-sono">{text.about}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contatti">{text.contact}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}