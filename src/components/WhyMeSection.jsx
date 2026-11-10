
import {
    ChatDots,
    Palette,
    Lightning,
    PersonCheck
} from 'react-bootstrap-icons';

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
            'Un sito non deve solo funzionare: deve anche essere piacevole da utilizzare. Cu­ro layout, dettagli e navigazione per creare un’esperienza coerente e intuitiva.'
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

export default function WhyMeSection() {
    return (
        <div className="container">
            <section className="why-me-section ">

                <div className="why-me-header">
                    <h2 className="section-title">
                        Perché lavorare con me
                    </h2>

                    <p>
                        Un buon sito nasce da una buona collaborazione.
                        Ecco cosa porto in ogni progetto, oltre al codice.
                    </p>
                </div>

                <div className="why-me-grid">
                    {strengths.map((strength, index) => {
                        const Icon = strength.icon;

                        return (
                            <article
                                className="why-me-card"
                                key={index}
                            >
                                <div className="why-me-icon">
                                    <Icon size={26} />
                                </div>

                                <h3>{strength.title}</h3>

                                <p>{strength.description}</p>
                            </article>
                        );
                    })}
                </div>

            </section>
        </div>
    );
}
