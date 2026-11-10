
import {
    Controller,
    Film,
    Compass,
    People
} from 'react-bootstrap-icons';

const interests = [
    {
        icon: Film,
        title: 'Anime e videogiochi',
        description:
            'Appassionato di storie, mondi e personaggi che sanno lasciarmi qualcosa. Che sia un anime, un videogioco o una bella narrazione, adoro immergermi in universi diversi dal mio.'
    },
    {
        icon: Compass,
        title: 'Avventura e natura',
        description:
            'Non mi piace passare tutto il tempo chiuso in casa. Mi piace esplorare nuovi posti, stare immerso nella natura e mettermi alla prova con attività all’aperto.'
    },
    {
        icon: Controller,
        title: 'Sport e movimento',
        description:
            'Mi piace sperimentare attività diverse, imparare nuove abilità e trovare modi sempre nuovi per mettermi in movimento. La curiosità non si ferma alla scrivania.'
    },
    {
        icon: People,
        title: 'Persone e nuove esperienze',
        description:
            'Sono una persona curiosa anche quando si tratta di conoscere gli altri. Mi piace socializzare, incontrare persone nuove e condividere esperienze, idee e momenti spontanei.'
    }
];

export default function AboutOutsideCode() {
    return (
        <section className="about-outside-code">

            <div className="about-outside-code-header">
                <h2>Fuori dal codice</h2>

                <p>
                    Per quanto mi piaccia programmare, la mia vita non
                    gira esclusivamente intorno a un editor di testo.
                    Sono curioso, mi piace sperimentare e difficilmente
                    riesco a limitarmi a un solo interesse.
                </p>

                <p>
                    Tra anime, videogiochi, avventure all’aperto e
                    nuove conoscenze, cerco sempre qualcosa di diverso
                    da fare, imparare o semplicemente vivere.
                </p>
            </div>

            <div className="interests-grid">
                {interests.map((interest, index) => {
                    const Icon = interest.icon;

                    return (
                        <article
                            className="interest-card"
                            key={index}
                        >
                            <div className="interest-icon">
                                <Icon size={28} />
                            </div>

                            <h3>{interest.title}</h3>

                            <p>{interest.description}</p>
                        </article>
                    );
                })}
            </div>

        </section>
    );
}
