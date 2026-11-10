import cards from "../data/path";
import PathCard from "./PathCard";

export default function AboutPath() {

    return (
        <div>
            {/* Cosa mettere? Sicuramente corso boolean. Poi va beh formazione continua e vita da freelance attualmente. Studi universitari sicuramente ingengeria. Liceo Scientifico? Certificato di inglese. Il codice mi accompagna da tutta la vita? Devo mettermi nei panni di uno che vuole un sito web, deve credere che io davvero sia un pro. Corso di programmazione comau? Sono appassionato di codice?  */}
            <h1>Un percorso, non un piano prestabilito</h1>
            <p>
                Il mio percorso non è stato esattamente lineare, ma una cosa è rimasta costante: la curiosità per la tecnologia e il piacere di costruire qualcosa attraverso il codice.

                Dagli studi tecnici alla formazione nello sviluppo web, fino ai primi progetti freelance, ho continuato a esplorare e approfondire ciò che mi interessa davvero: creare esperienze digitali funzionali, curate e utili.
            </p>

            {cards.map(card => (
                <PathCard key={card.title} info={card} />
            ))}

        </div>
    )
}   