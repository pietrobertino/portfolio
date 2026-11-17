import { useRef } from 'react';
import { Window, Cart3, Terminal, PlayFill, ArrowRight } from 'react-bootstrap-icons';
import { useLanguage } from '../contexts/LanguageContext';

const ICONS = [Window, Cart3, Terminal];
const CTA = { it: 'Parliamone', en: "Let's talk" };

export default function ServiceCard({ serviceObj, index = 0 }) {
    const { lang } = useLanguage();
    const cardRef = useRef(null);
    const videoRef = useRef(null);
    const Icon = ICONS[index % ICONS.length];
    const hasVideo = Boolean(serviceObj.video);

    const play = () => videoRef.current?.play()?.catch(() => { });
    const stop = () => {
        const v = videoRef.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
    };

    // inclinazione 3D + posizione del riflesso
    const onMove = (e) => {
        const el = cardRef.current;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
        el.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
        el.style.setProperty('--mx', `${px * 100}%`);
        el.style.setProperty('--my', `${py * 100}%`);
    };

    const onLeave = () => {
        ['--rx', '--ry', '--mx', '--my'].forEach((p) => cardRef.current?.style.removeProperty(p));
        stop();
    };

    return (
        <article
            ref={cardRef}
            className="svc-card"
            onMouseEnter={play}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            <div className="svc-card__media">
                {hasVideo ? (
                    <video
                        ref={videoRef}
                        src={`/videos/${serviceObj.video}`}
                        aria-label={serviceObj.title}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    />
                ) : (
                    <div className="svc-card__placeholder">
                        <Icon size={56} />
                    </div>
                )}

                <span className="svc-card__num">{String(index + 1).padStart(2, '0')}</span>

                {hasVideo && (
                    <span className="svc-card__play" aria-hidden="true">
                        <PlayFill size={22} />
                    </span>
                )}
            </div>

            <div className="svc-card__body">
                <div className="svc-card__head">
                    <span className="svc-card__icon"><Icon size={20} /></span>
                    <h3>{serviceObj.title}</h3>
                </div>

                <p>{serviceObj.p}</p>

                <a href="#contatti" className="svc-card__cta">
                    <span>{CTA[lang] ?? CTA.it}</span>
                    <ArrowRight size={16} />
                </a>
            </div>
        </article>
    );
}