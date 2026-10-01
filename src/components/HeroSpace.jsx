import { useLanguage } from "../contexts/LanguageContext"

export default function HeroSpace() {

    const { t } = useLanguage();
    const text = t.hero;

    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="eyebrow mb-3">&lt;AboutMe /&gt;</div>
                <h1 className="mb-3">{text.text1}<br />{text.text2}</h1>
                {/* <p className="lead mb-4">Costruisco applicazioni web solide, dal backend Express alle interfacce React — con un occhio di riguardo per codice manutenibile e performance reali.</p> */}
                <div className="d-flex gap-3 flex-wrap">
                    <a href="#progetti" className="btn btn-accent px-4 py-2">{text.btn1}</a>
                    <a href="#contatti" className="btn btn-outline-accent px-4 py-2">{text.btn2}</a>
                </div>
            </div>
        </section>
    )
}