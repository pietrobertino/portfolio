import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export default function LanguageToggle() {

    const navigate = useNavigate();

    const { lang, setLang } = useLanguage();

    function toggle(selectedLang) {
        if (selectedLang != lang) {
            setLang(selectedLang)
            navigate(`/${selectedLang}`)
        }
    }

    return (
        <div className="lang-switch" role="group" aria-label="Lingua del sito">
            <button type="button" className={lang === 'it' ? 'lang-btn active' : 'lang-btn'} data-lang="it" aria-pressed={lang === 'it' ? 'true' : 'false'} onClick={() => toggle('it')}>IT</button>
            <button type="button" className={lang === 'en' ? 'lang-btn active' : 'lang-btn'} data-lang="en" aria-pressed={lang === 'en' ? 'true' : 'false'} onClick={() => toggle('en')}>EN</button>
        </div>
    )

}