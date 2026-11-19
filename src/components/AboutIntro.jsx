import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';
import AboutMedia from './AboutMedia';

const INTRO = {
    it: [
        'Sono Pietro, sviluppatore web freelance. Realizzo siti e applicazioni su misura, dall’interfaccia al server, curando la chiarezza e i dettagli.',
        'Vengo da studi tecnici e da un percorso di formazione full stack. Ho imparato che i progetti migliori nascono ascoltando prima di scrivere codice: ti aiuto a capire cosa serve davvero e lo trasformo in qualcosa di concreto.',
    ],
    en: [
        'I’m Pietro, a freelance web developer. I build custom websites and applications, from the interface to the server, with a focus on clarity and detail.',
        'I come from a technical background and a full stack training path. I’ve learned that the best projects start by listening before writing code: I help you figure out what you really need and turn it into something concrete.',
    ],
};

export default function AboutIntro({ title }) {
    const { lang } = useLanguage();
    const paragraphs = INTRO[lang] ?? INTRO.it;

    return (
        <section className="about-split about-split--intro">
            <Reveal from="left" className="h-100">
                <AboutMedia
                    src="/pictures/foto_di_me_2.jpg"
                    alt="Pietro Bertino"
                    tag="Web Developer · Freelance"
                />
            </Reveal>

            <div className="about-split__text">
                <Reveal as="h1" from="right" className="about-title">{title}</Reveal>
                {paragraphs.map((p, i) => (
                    <Reveal key={i} as="p" from="right" delay={0.15 + i * 0.15} className="about-lead">
                        {p}
                    </Reveal>
                ))}
            </div>
        </section>
    );
}