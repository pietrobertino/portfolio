import { useEffect, useRef } from 'react';
import {
    motion, useMotionValue, useSpring, useTransform,
    useMotionTemplate, useReducedMotion, useInView,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const EASE = [0.22, 1, 0.36, 1];

const EXTRA = {
    it: { badge: 'Disponibile per nuovi progetti', url: 'latuaattivita.it' },
    en: { badge: 'Available for new projects', url: 'yourbusiness.com' },
};

const stagger = {
    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const fromLeft = {
    hidden: { opacity: 0, x: -40, transition: { duration: 0.5, ease: 'easeIn' } },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
};
const fromRight = {
    hidden: { opacity: 0, x: 60, transition: { duration: 0.5, ease: 'easeIn' } },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: EASE } },
};

export default function HeroSpace() {
    const { t, lang } = useLanguage();
    const text = t.home.hero;
    const extra = EXTRA[lang] ?? EXTRA.it;

    const ref = useRef(null);
    const reduce = useReducedMotion();
    const inView = useInView(ref, { amount: 0.3 });

    // bagliore che segue il mouse
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 70, damping: 20 });
    const sy = useSpring(y, { stiffness: 70, damping: 20 });
    const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(155,140,255,.18), transparent 70%)`;

    // parallasse della finestra del sito (posizione del mouse da -0.5 a 0.5)
    const nx = useMotionValue(0);
    const ny = useMotionValue(0);
    const snx = useSpring(nx, { stiffness: 60, damping: 18 });
    const sny = useSpring(ny, { stiffness: 60, damping: 18 });
    const vx = useTransform(snx, [-0.5, 0.5], [14, -14]);
    const vy = useTransform(sny, [-0.5, 0.5], [10, -10]);

    useEffect(() => {
        const r = ref.current.getBoundingClientRect();
        x.set(r.width * 0.7);
        y.set(r.height * 0.4);
    }, [x, y]);

    const onMove = (e) => {
        if (reduce) return;
        const r = ref.current.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
        nx.set((e.clientX - r.left) / r.width - 0.5);
        ny.set((e.clientY - r.top) / r.height - 0.5);
    };

    const onLeave = () => {
        nx.set(0);
        ny.set(0);
    };

    return (
        <section className="hero" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
            <motion.div className="hero-glow" style={{ background: glow }} aria-hidden="true" />
            <div className="hero-grid" aria-hidden="true" />

            <motion.div
                className="container hero-inner"
                variants={stagger}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
            >
                <div className="hero-content">
                    <motion.div className="eyebrow mb-3" variants={fromLeft}>&lt;AboutMe /&gt;</motion.div>

                    <motion.h1 className="mb-3" variants={fromLeft}>
                        {text.text1}<br />
                        <span className="hero-accent">{text.text2}</span>
                    </motion.h1>

                    <motion.p className="lead mb-4" variants={fromLeft}>{text.text3}</motion.p>

                    <motion.div className="d-flex gap-3 flex-wrap" variants={fromLeft}>
                        <Link to={`/${lang}/projects`} className="btn btn-accent px-4 py-2">{text.btn1}</Link>
                        <a href="#contatti" className="btn btn-outline-accent px-4 py-2">{text.btn2}</a>
                    </motion.div>

                    <motion.span className="hero-badge" variants={fromLeft}>
                        <span className="hero-badge__dot" />
                        {extra.badge}
                    </motion.span>
                </div>

                <motion.div className="hero-visual" variants={fromRight} aria-hidden="true">
                    <motion.div style={{ x: vx, y: vy }}>
                        <div className="hero-mock">
                            <div className="hero-mock__bar">
                                <i /><i /><i />
                                <span className="hero-mock__url">{extra.url}</span>
                            </div>
                            <div className="hero-mock__body">
                                <div className="hero-mock__nav"><b /><span /><span /><span /></div>
                                <div className="hero-mock__hero">
                                    <div className="hero-mock__line hero-mock__line--lg" />
                                    <div className="hero-mock__line" />
                                    <div className="hero-mock__line hero-mock__line--sm" />
                                    <div className="hero-mock__btn" />
                                </div>
                                <div className="hero-mock__cards"><div /><div /><div /></div>
                            </div>
                        </div>

                        <span className="hero-chip hero-chip--react">React</span>
                        <span className="hero-chip hero-chip--laravel">Express</span>
                        <span className="hero-chip hero-chip--mysql">Supabase</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="hero-scroll" aria-hidden="true"><span /></div>
        </section>
    );
}