import { ArrowUpRight } from 'react-bootstrap-icons';
import Reveal from './Reveal';

export default function PathCard({ info, index }) {
    const left = index % 2 === 0;
    const Tag = info.url ? 'a' : 'div';
    const linkProps = info.url
        ? { href: info.url, target: '_blank', rel: 'noopener noreferrer' }
        : {};

    const initials = info.org
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className={`journey-item journey-item--${left ? 'left' : 'right'}`}>
            <Reveal from={left ? 'left' : 'right'}>
                <Tag className="journey-card" style={{ '--c': info.color }} {...linkProps}>
                    <span className="journey-card__logo">
                        {info.logo ? <img src={info.logo} alt="" /> : initials}
                    </span>

                    <div className="journey-card__body">
                        {info.period && <span className="journey-card__period">{info.period}</span>}
                        <h3>{info.title}</h3>
                        <span className="journey-card__org">{info.org}</span>
                        <p>{info.text}</p>
                    </div>

                    {info.url && <ArrowUpRight className="journey-card__arrow" size={18} />}
                </Tag>
            </Reveal>
        </div>
    );
}