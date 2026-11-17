import { useState } from 'react';
import { Whatsapp, EnvelopeAtFill, ArrowUpRight, Copy, Check2 } from 'react-bootstrap-icons';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const EMAIL = 'bertinopietro20@gmail.com';
const message = encodeURIComponent('Ciao, avrei bisogno di un sito web! ');

const channels = [
    {
        key: 'whatsapp',
        icon: Whatsapp,
        label: 'WhatsApp',
        title: 'Scrivimi su WhatsApp',
        href: `https://wa.me/393703147020?text=${message}`,
        external: true,
        from: 'left',
    },
    {
        key: 'mail',
        icon: EnvelopeAtFill,
        label: 'Email',
        title: 'Sentiamoci via mail',
        href: `mailto:${EMAIL}`,
        external: false,
        from: 'right',
    },
];

export default function ContactsSection() {
    const { t } = useLanguage();
    const text = t.home.contact;
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard non disponibile: l'utente può usare il link mail
        }
    };

    return (
        <section id="contatti" className="border-top-section py-5">
            <div className="container">
                <Reveal as="h2" from="left" className="section-title">{text.title}</Reveal>
                <Reveal as="p" from="left" delay={0.1} className="section-sub">{text.subtitle}</Reveal>

                <div className="contact-grid">
                    {channels.map((c, i) => {
                        const Icon = c.icon;

                        return (
                            <Reveal key={c.key} from={c.from} delay={i * 0.1} className="h-100">
                                <a
                                    className={`contact-card contact-card--${c.key}`}
                                    href={c.href}
                                    {...(c.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                >
                                    <span className="contact-card__icon">
                                        <Icon size={28} />
                                    </span>

                                    <span className="contact-card__body">
                                        <span className="contact-card__label">{c.label}</span>
                                        <span className="contact-card__title">{c.title}</span>
                                    </span>

                                    <ArrowUpRight className="contact-card__arrow" size={20} aria-hidden="true" />
                                </a>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal from="up" delay={0.25} className="contact-copy-wrap">
                    <span>Oppure copia l’indirizzo:</span>
                    <button
                        type="button"
                        className={`contact-copy${copied ? ' is-copied' : ''}`}
                        onClick={copyEmail}
                    >
                        {EMAIL}
                        {copied ? <Check2 size={16} /> : <Copy size={16} />}
                        <span className="visually-hidden" aria-live="polite">{copied ? 'Copiato' : ''}</span>
                    </button>
                </Reveal>
            </div>
        </section>
    );
}