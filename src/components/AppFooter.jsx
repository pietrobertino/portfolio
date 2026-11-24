import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useMotionTemplate, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Whatsapp, Envelope, ArrowUp } from "react-bootstrap-icons";
import { useLanguage } from "../contexts/LanguageContext";

export default function AppFooter() {
    const { t, lang } = useLanguage();
    const footerRef = useRef(null);
    const reduce = useReducedMotion();

    // Bagliore viola che segue il mouse con inerzia (come in HeroSpace)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 70, damping: 20 });
    const sy = useSpring(y, { stiffness: 70, damping: 20 });
    const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(155, 140, 255, .18), transparent 70%)`;

    useEffect(() => {
        if (!footerRef.current) return;
        const r = footerRef.current.getBoundingClientRect();
        // Posizione iniziale in alto al centro come nella foto
        x.set(r.width * 0.5);
        y.set(0);
    }, [x, y]);

    const onMove = (e) => {
        if (reduce || !footerRef.current) return;
        const r = footerRef.current.getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
    };

    const onLeave = () => {
        if (!footerRef.current) return;
        const r = footerRef.current.getBoundingClientRect();
        x.set(r.width * 0.5);
        y.set(0);
    };

    const scrollToTop = () => {
        const scrollContainer = document.querySelector(".page-scroll");
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer
            ref={footerRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="site-footer"
        >
            <motion.div
                className="footer-glow"
                style={{ background: reduce ? undefined : glow }}
                aria-hidden="true"
            />

            <div className="container">
                <div className="footer-top">
                    {/* Colonna 1: Brand & Bio */}
                    <div className="footer-brand-col">
                        <div className="footer-brand">
                            <span className="footer-logo-box" aria-hidden="true"></span>
                            <span className="footer-brand-name">Pietro Bertino</span>
                        </div>
                        <p className="footer-tagline">
                            {t?.footer?.tagline || "Sviluppatore web freelance. Siti e applicazioni su misura."}
                        </p>
                    </div>

                    {/* Colonna 2: Pagine */}
                    <div className="footer-col">
                        <h4 className="footer-heading">{t?.footer?.pages || "PAGINE"}</h4>
                        <nav className="footer-nav" aria-label="Footer navigation">
                            <Link to={`/${lang}`}>Home</Link>
                            <Link to={`/${lang}/projects`}>Progetti</Link>
                            <Link to={`/${lang}/about`}>Su di me</Link>
                        </nav>
                    </div>

                    {/* Colonna 3: Contatti con icone */}
                    <div className="footer-col">
                        <h4 className="footer-heading">{t?.footer?.contacts || "CONTATTI"}</h4>
                        <div className="footer-socials">
                            <a
                                href="https://www.linkedin.com/in/pietro-bertino-60a0342a5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="footer-social-btn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://github.com/pietrobertino"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="footer-social-btn"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://wa.me/390000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="footer-social-btn"
                            >
                                <Whatsapp size={18} />
                            </a>
                            <a
                                href="mailto:bertinopietro20@gmail.com"
                                aria-label="Email"
                                className="footer-social-btn"
                            >
                                <Envelope size={18} />
                            </a>
                        </div>
                        <a href="mailto:bertinopietro20@gmail.com" className="footer-email">
                            bertinopietro20@gmail.com
                        </a>
                    </div>
                </div>

                {/* Barra inferiore */}
                <div className="footer-bottom">
                    <span>© 2026 Pietro Bertino</span>
                    <span className="footer-stack">{t?.footer?.stack || "Realizzato con React"}</span>
                    <button type="button" onClick={scrollToTop} className="footer-top-btn">
                        <ArrowUp size={14} />
                        <span>{t?.footer?.backToTop || "Torna su"}</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}