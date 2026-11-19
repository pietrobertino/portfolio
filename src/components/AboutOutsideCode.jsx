import { Controller, Compass, Bicycle, People } from 'react-bootstrap-icons';
import Reveal from './Reveal';
import AboutMedia from './AboutMedia';

const interests = [
    {
        icon: Controller,
        title: 'Anime e videogiochi',
        img: '',
        description:
            'Appassionato di storie, mondi e personaggi che sanno lasciarmi qualcosa. Che sia un anime, un videogioco o una bella narrazione, adoro immergermi in universi diversi dal mio.',
    },
    {
        icon: Compass,
        title: 'Avventura e natura',
        img: '',
        description:
            'Non mi piace passare tutto il tempo chiuso in casa. Mi piace esplorare nuovi posti, stare immerso nella natura e mettermi alla prova con attività all’aperto.',
    },
    {
        icon: Bicycle,
        title: 'Sport e movimento',
        img: '',
        description:
            'Mi piace sperimentare attività diverse, imparare nuove abilità e trovare modi sempre nuovi per mettermi in movimento. La curiosità non si ferma alla scrivania.',
    },
    {
        icon: People,
        title: 'Persone e nuove esperienze',
        img: '',
        description:
            'Sono una persona curiosa anche quando si tratta di conoscere gli altri. Mi piace socializzare, incontrare persone nuove e condividere esperienze, idee e momenti spontanei.',
    },
];

export default function AboutOutsideCode() {
    return (
        <section className="about-outside">
            <div className="container about-head">
                <Reveal as="h2" from="up" className="section-title">Fuori dal codice</Reveal>
                <Reveal as="p" from="up" delay={0.1} className="section-sub">
                    Per quanto mi piaccia programmare, la mia vita non gira esclusivamente intorno a un editor di testo.
                    Sono curioso, mi piace sperimentare e difficilmente riesco a limitarmi a un solo interesse.
                </Reveal>
                <Reveal as="p" from="up" delay={0.2} className="section-sub">
                    Tra anime, videogiochi, avventure all’aperto e nuove conoscenze, cerco sempre qualcosa di diverso
                    da fare, imparare o semplicemente vivere.
                </Reveal>
            </div>

            {interests.map((item, i) => {
                const Icon = item.icon;
                const reverse = i % 2 === 1;
                const mediaFrom = reverse ? 'right' : 'left';
                const textFrom = reverse ? 'left' : 'right';

                return (
                    <div key={item.title} className={`about-split${reverse ? ' about-split--reverse' : ''}`}>
                        <Reveal from={mediaFrom} className="h-100">
                            <AboutMedia
                                src={item.img}
                                alt={item.title}
                                icon={Icon}
                                label={`Foto: ${item.title}`}
                            />
                        </Reveal>

                        <div className="about-split__text">
                            <Reveal from={textFrom} className="about-num">
                                <Icon size={18} />
                                <span>{String(i + 1).padStart(2, '0')}</span>
                            </Reveal>
                            <Reveal as="h3" from={textFrom} delay={0.1} className="about-subtitle">{item.title}</Reveal>
                            <Reveal as="p" from={textFrom} delay={0.2} className="about-lead">{item.description}</Reveal>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}