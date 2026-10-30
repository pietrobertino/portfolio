import skills from "../data/skills"
import services from "../data/services";
import { useLanguage } from "../contexts/LanguageContext"
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

export default function ServicesSection() {

    const { t, lang } = useLanguage();
    const text = t.services;


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
                    <h5 className=" pt-5">Le tecnologie che uso: </h5>
                    {skills.map(skill => (
                        <span key={skill}>{skill} </span>
                    ))}
                </div>





            </div>
        </section>
    )
}