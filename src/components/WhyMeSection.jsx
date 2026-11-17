import { useEffect, useState } from 'react';
import { ChatDots, Palette, Lightning, PersonCheck } from 'react-bootstrap-icons';
import Reveal from './Reveal';

const strengths = [
    {
        icon: ChatDots,
        title: 'Comunicazione diretta',
        description:
            'Niente giri di parole o tecnicismi inutili. Ti ascolto, faccio le domande giuste e ti tengo aggiornato durante tutto il progetto.'
    },
    {
        icon: Palette,
        title: 'Occhio al design',
        description:
            'Un sito non deve solo funzionare: deve anche essere piacevole da utilizzare. Curo layout, dettagli e navigazione per creare un’esperienza coerente e intuitiva.'
    },
    {
        icon: Lightning,
        title: 'Soluzioni su misura',
        description:
            'Ogni progetto ha esigenze diverse. Preferisco capire cosa serve davvero e costruire una soluzione concreta, senza complicare inutilmente le cose.'
    },
    {
        icon: PersonCheck,
        title: 'Un rapporto diretto',
        description:
            'Lavori direttamente con chi sviluppa il tuo sito. Nessun intermediario, passaggi inutili o informazioni perse per strada: le tue idee arrivano direttamente a chi le realizza.'
    }
];

const WIDE = '(min-width: 992px)';
const DIRECTIONS_WIDE = ['left', 'down', 'up', 'right'];   // 4 card affiancate
const DIRECTIONS_NARROW = ['left', 'right', 'left', 'right']; // tablet e mobile

function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mq = window.matchMedia(query);
        const onChange = (e) => setMatches(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, [query]);

    return matches;
}

// Passa al CSS la posizione del mouse dentro la card
const trackPointer = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
};

export default function WhyMeSection() {
    const isWide = useMediaQuery(WIDE);
    const directions = isWide ? DIRECTIONS_WIDE : DIRECTIONS_NARROW;

    return (
        <section id="why-me" className="border-top-section py-5">
            <div className="container">

                <div className="why-me-header">
                    <Reveal as="h2" from="up" className="section-title">Perché lavorare con me</Reveal>
                    <Reveal as="p" from="up" delay={0.1} className="section-sub">
                        Un buon sito nasce da una buona collaborazione. Ecco cosa porto in ogni progetto, oltre al codice.
                    </Reveal>
                </div>

                <div className="why-me-grid">
                    {strengths.map((strength, i) => {
                        const Icon = strength.icon;

                        return (
                            <Reveal key={strength.title} from={directions[i]} delay={i * 0.1} className="h-100">
                                <article className="why-me-card" onMouseMove={trackPointer}>
                                    <Icon className="why-me-watermark" size={130} aria-hidden="true" />

                                    <div className="why-me-icon">
                                        <Icon size={26} />
                                    </div>

                                    <h3>{strength.title}</h3>
                                    <p>{strength.description}</p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}