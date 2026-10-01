import { useLanguage } from "../contexts/LanguageContext"

export default function ContactsSection() {

    const { t } = useLanguage();
    const text = t.contact;

    return (
        <section id="contatti" className="border-top-section py-5">
            <div className="container">
                <h2 className="section-title">{text.title}</h2>
                <p className="section-sub">{text.subtitle}</p>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/pietro-bertino-60a0342a5/" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="https://github.com/pietrobertino" target="_blank" rel="noopener">GitHub</a>
                    <a href="mailto:bertinopietro20@gmail.com">bertinopietro20@gmail.com</a>
                </div>
            </div>
        </section>
    )
}