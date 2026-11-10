import { useLanguage } from "../contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageToggle() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const path = location?.pathname.split('/');

    const { lang, setLang } = useLanguage();

    function toggle(selectedLang) {
        if (selectedLang != lang) {
            let endpoint = '';
            for (let i = 0; i < path.length; i++) {
                if (i !== 0 && i !== 1) endpoint += `/${path[i]}`;
            }
            setLang(selectedLang);
            navigate(`/${selectedLang}${endpoint && `/${endpoint}`}`);
        }
    }

    return (
        <div className="lang-switch" role="group" aria-label="Lingua del sito">
            <button type="button" className={lang === 'it' ? 'lang-btn active' : 'lang-btn'} data-lang="it" aria-pressed={lang === 'it' ? 'true' : 'false'} onClick={() => toggle('it')}>IT</button>
            <button type="button" className={lang === 'en' ? 'lang-btn active' : 'lang-btn'} data-lang="en" aria-pressed={lang === 'en' ? 'true' : 'false'} onClick={() => toggle('en')}>EN</button>
        </div>
    )

}