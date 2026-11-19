import { Linkedin, Github, ArrowUpRight } from 'react-bootstrap-icons';
import Reveal from './Reveal';

const LINKS = [
    {
        key: 'linkedin',
        icon: Linkedin,
        label: 'LinkedIn',
        handle: 'Pietro Bertino',
        href: 'https://www.linkedin.com/in/pietro-bertino-60a0342a5/',
        from: 'left',
    },
    {
        key: 'github',
        icon: Github,
        label: 'GitHub',
        handle: '@pietrobertino',
        href: 'https://github.com/pietrobertino',
        from: 'right',
    },
];

export default function AboutLinks() {
    return (
        <section className="about-block">
            <div className="container">
                <div className="about-head">
                    <Reveal as="h2" from="up" className="section-title">Altro su di me</Reveal>
                </div>

                <div className="about-links">
                    {LINKS.map((l, i) => {
                        const Icon = l.icon;

                        return (
                            <Reveal key={l.key} from={l.from} delay={i * 0.1} className="h-100">
                                <a className="about-link" href={l.href} target="_blank" rel="noopener noreferrer">
                                    <span className="about-link__icon"><Icon size={26} /></span>
                                    <span className="about-link__text">
                                        <strong>{l.label}</strong>
                                        <small>{l.handle}</small>
                                    </span>
                                    <ArrowUpRight className="about-link__arrow" size={20} />
                                </a>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}