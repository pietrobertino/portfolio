import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'react-bootstrap-icons';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const CTA = { it: 'Visita il sito', en: 'Visit the site' };

export default function ProjectCard({ projectObj, index = 0 }) {
    const { lang } = useLanguage();

    const right = index % 2 === 1;          // i progetti dispari hanno il testo a destra
    const from = right ? 'right' : 'left';

    // link al sito del progetto; se manca, apre la pagina interna del progetto
    const external = Boolean(projectObj.link_demo);
    const Tag = external ? 'a' : Link;
    const linkProps = { href: projectObj.link_demo, target: '_blank', rel: 'noopener noreferrer' }

    // Qui lascerei parlare soprattutto il lavoro. Se puoi, per ogni progetto mostra:

    // Cosa hai realizzato.

    // Quali problemi hai risolto.

    // Le tecnologie utilizzate.

    // Una breve descrizione delle scelte progettuali.

    return (
        <Tag className={`project-panel${right ? ' project-panel--right' : ''}`} {...linkProps}>
            <img className="project-panel__img" src={projectObj.img} alt="" loading="lazy" />
            <div className="project-panel__shade" />

            <div className="container project-panel__inner">
                <div className="project-panel__content">
                    <Reveal from={from} className="project-panel__num">
                        {String(index + 1).padStart(2, '0')}
                    </Reveal>

                    <Reveal as="h2" from={from} delay={0.1} className="project-panel__title">
                        {projectObj.title}
                    </Reveal>

                    <Reveal as="p" from={from} delay={0.2} className="project-panel__desc">
                        {projectObj.description[lang]}
                    </Reveal>

                    <Reveal from={from} delay={0.3} className="project-panel__tags">
                        {projectObj.stack?.map((s) => (
                            <span className="stack-tag" key={s}>{s}</span>
                        ))}
                    </Reveal>

                    <Reveal from={from} delay={0.4}>
                        <span className="project-panel__cta">
                            {CTA[lang] ?? CTA.it}
                            <ArrowUpRight size={18} />
                        </span>
                    </Reveal>
                </div>
            </div>
        </Tag>
    );
}