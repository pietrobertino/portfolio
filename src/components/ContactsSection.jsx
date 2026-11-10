import { useLanguage } from "../contexts/LanguageContext"

export default function ContactsSection() {

    const { t } = useLanguage();
    const text = t.home.contact;

    const message = encodeURIComponent("Ciao, avrei bisogno di un sito web! ")

    return (
        <section id="contatti" className="border-top-section py-5">
            <div className="container">
                <h2 className="section-title">{text.title}</h2>
                <p className="section-sub">{text.subtitle}</p>
                <div className="contact-links">
                    <a href={`https://wa.me/393703147020?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer">Scrivimi su Whattsapp</a>
                    <a href="mailto:bertinopietro20@gmail.com">Sentiamoci via Mail</a>
                </div>
            </div>
        </section>
    )
}