import services from "../data/services";
import { useLanguage } from "../contexts/LanguageContext"
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { Phone, Speedometer2, Person, Code } from "react-bootstrap-icons";

const descCards = [
    { icon: <Phone size={64} />, title: 'Responsiveness', desc: 'Funziona bene su smartphone, tablet e desktop.' },
    { icon: <Speedometer2 size={64} />, title: 'Performance', desc: 'Siti veloci, senza caricamenti eterni.' },
    { icon: <Person size={64} />, title: 'Usabilità', desc: 'Navigazione intuitiva, senza labirinti digitali.' },
    { icon: <Code size={64} />, title: 'Codice', desc: 'Soluzioni curate, organizzate e facili da mantenere.' },
];

export default function ServicesSection() {

    const { t, lang } = useLanguage();
    const text = t.home.services;


    return (
        <section id="competenze" className="border-top-section py-5">
            <div className="container">
                <div className="services-head">
                    <Reveal as="span" from="down" className="eyebrow-tag">
                        &lt;{lang === 'it' ? 'Servizi' : 'Services'} /&gt;
                    </Reveal>
                    <Reveal as="h2" from="up" delay={0.1} className="section-title">{text.title}</Reveal>
                    <Reveal as="p" from="up" delay={0.2} className="section-sub">{text.subtitle}</Reveal>
                </div>

                <div className="services-grid">
                    {services[lang].map((service, i) => (
                        <Reveal key={i} from={['left', 'up', 'right'][i % 3]} delay={i * 0.15} className="h-100">
                            <ServiceCard serviceObj={service} index={i} />
                        </Reveal>
                    ))}
                </div>
                <div className="features text-center">
                    <div className="features-divider" aria-hidden="true" />
                    <Reveal as="h3" from="left" className="section-title desc-title">Non solo un bel sito</Reveal>

                    <ul className="services-grid desc-list">
                        {descCards.map(card => (
                            <li key={card.title} className="project-card service-card desc-card" tabIndex={0}>
                                <div className="desc-card-inner">
                                    <div className="desc-card-front">
                                        {card.icon}
                                        <h4>{card.title}</h4>
                                    </div>
                                    <div className="desc-card-back">
                                        <h3 aria-hidden="true">{card.title}</h3>
                                        <p className="desc">{card.desc}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}