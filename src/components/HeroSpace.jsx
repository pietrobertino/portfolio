import { useEffect, useRef } from 'react';
import { useLanguage } from "../contexts/LanguageContext"
import {
    motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion,
} from 'framer-motion';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export default function HeroSpace() {

    const { t } = useLanguage();
    const text = t.hero;

    const ref = useRef(null);
    const reduce = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 70, damping: 20 });
    const sy = useSpring(y, { stiffness: 70, damping: 20 });
    const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(155,140,255,.18), transparent 70%)`;

    // posizione iniziale del bagliore (visibile anche su touch, dove il mouse non c'è)
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
    };

    return (
        <section className="hero" ref={ref} onMouseMove={onMove}>
            <motion.div className="hero-glow" style={{ background: glow }} aria-hidden="true" />

            <motion.div className="container" variants={container} initial="hidden" animate="show">
                <motion.div className="eyebrow mb-3" variants={item}>&lt;AboutMe /&gt;</motion.div>
                <motion.h1 className="mb-3" variants={item}>{text.text1}<br />{text.text2}</motion.h1>
                <motion.p className="lead mb-4" variants={item}>Il tuo testo</motion.p>
                <motion.div className="d-flex gap-3 flex-wrap" variants={item}>
                    <a href="#progetti" className="btn btn-accent px-4 py-2">{text.btn1}</a>
                    <a href="#contatti" className="btn btn-outline-accent px-4 py-2">{text.btn2}</a>
                </motion.div>
            </motion.div>
        </section>
    );
}