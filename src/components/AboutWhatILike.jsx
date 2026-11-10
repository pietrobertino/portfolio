
import {
    Puzzle,
    Lightbulb,
    Sliders,
    People
} from 'react-bootstrap-icons';

const values = [
    {
        icon: Puzzle,
        title: 'Il piacere di risolvere problemi',
        description: 'Mi piace il modo di pensare che richiede la programmazione: scomporre problemi complessi, organizzare le idee e trovare soluzioni. Ogni piccolo ostacolo è un’occasione per ragionare e sperimentare. E ammetto che vedere finalmente funzionare qualcosa dopo averci ragionato sopra dà una certa soddisfazione.'
    },
    {
        icon: Lightbulb,
        title: 'Creare qualcosa da zero',
        description: 'C’è qualcosa di particolarmente gratificante nel partire da un’idea e vederla prendere forma attraverso il codice. Che si tratti di una piccola funzionalità o di un’intera applicazione, mi piace sapere che dietro ciò che funziona c’è qualcosa che ho progettato e costruito io.'
    },
    {
        icon: Sliders,
        title: 'Autonomia e responsabilità',
        description: 'Apprezzo la possibilità di organizzare il mio lavoro, gestire le priorità e seguire un progetto in tutte le sue fasi. Mi piace avere il controllo su ciò che realizzo e assumermi la responsabilità delle soluzioni che propongo.'
    },
    {
        icon: People,
        title: 'Persone, idee e soluzioni',
        description: 'La parte tecnica è solo una faccia del mio lavoro. Mi piace anche confrontarmi con le persone, capire cosa hanno in mente e aiutarle a trasformare le loro necessità in qualcosa di concreto. Alla fine, la tecnologia ha senso soprattutto quando serve a qualcuno.'
    }
];

export default function AboutWhatILike() {
    return (
        <section className="about-what-i-like">

            <header className="about-what-i-like__header">
                <span className="about-what-i-like__eyebrow">
                    Oltre il codice
                </span>

                <h2>Perché proprio il codice?</h2>

                <p>
                    Non è soltanto una questione di tecnologia.
                    Quello che mi piace davvero dello sviluppo è
                    il processo che c'è dietro: ragionare,
                    sperimentare, risolvere problemi e trasformare
                    un'idea in qualcosa di concreto.
                </p>
            </header>

            <div className="about-what-i-like__grid">
                {values.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <article
                            className="about-what-i-like__card"
                            key={index}
                        >
                            <div className="about-what-i-like__icon">
                                <Icon size={26} />
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </article>
                    );
                })}
            </div>

        </section>
    );
}
