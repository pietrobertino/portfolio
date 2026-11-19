import { Fragment } from 'react';
import cards from '../data/path';
import PathCard from './PathCard';
import PathArrow from './PathArrow';
import Reveal from './Reveal';

export default function AboutPath() {
    return (
        <section className="about-block journey">
            <div className="container">
                <div className="about-head">
                    <Reveal as="h2" from="up" className="section-title">Un percorso, non un piano prestabilito</Reveal>
                    <Reveal as="p" from="up" delay={0.1} className="section-sub">
                        Dagli studi tecnici alla formazione nello sviluppo web, fino ai primi progetti freelance:
                        un percorso non lineare, tenuto insieme dalla curiosità per la tecnologia.
                    </Reveal>
                </div>

                <div className="journey-list">
                    {cards.map((card, i) => (
                        <Fragment key={card.id}>
                            <PathCard info={card} index={i} />
                            {i < cards.length - 1 && <PathArrow flip={i % 2 === 0} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}