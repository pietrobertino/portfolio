import services from "../data/services";
import { useLanguage } from "../contexts/LanguageContext"
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function ServicesSection() {

    const { t, lang } = useLanguage();
    const text = t.home.services;


    return (
        <section id="competenze" className="border-top-section py-5">
            <div className="container">
                <Reveal as="h2" from="left" className="section-title">{text.title}</Reveal>
                <Reveal as="p" from="left" delay={0.1} className="section-sub">{text.subtitle}</Reveal>
                <div className="services-grid">
                    {services[lang].map((service, i) => (
                        <Reveal key={i} delay={i * 0.2} className="h-100">
                            <ServiceCard serviceObj={service} />
                        </Reveal>
                    ))}
                </div>
                <div>
                    <h4>Non solo un bel sito</h4>
                    <ul>
                        <li>Responsive: funziona bene su smartphone, tablet e desktop.</li>

                        <li>Performance: siti veloci, senza caricamenti eterni.</li>

                        <li>Usabilità: navigazione intuitiva, senza labirinti digitali.</li>

                        <li>Codice: soluzioni curate, organizzate e facili da mantenere.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}