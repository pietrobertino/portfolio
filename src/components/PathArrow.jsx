import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PathArrow({ flip = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5 });

    const line = {
        initial: { pathLength: 0, opacity: 0 },
        animate: inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
        transition: inView ? { duration: 0.9, delay: 0.25, ease: 'easeInOut' } : { duration: 0.4 },
    };
    const head = {
        initial: { opacity: 0 },
        animate: { opacity: inView ? 1 : 0 },
        transition: { duration: 0.3, delay: inView ? 1.05 : 0 },
    };

    return (
        <div ref={ref} className={`journey-arrow${flip ? ' journey-arrow--flip' : ''}`} aria-hidden="true">

            {/* desktop */}
            <svg className="journey-arrow__wide" viewBox="0 0 400 100" fill="none">
                <motion.path
                    d="M 12 2 C 12 54, 388 46, 388 76"
                    {...line}
                />
                <motion.path
                    className="journey-arrow__head"
                    d="M 379 76 L 388 89 L 397 76 Z"
                    {...head}
                />
            </svg>

            {/* mobile */}
            <svg className="journey-arrow__narrow" viewBox="0 0 40 72" fill="none">
                <motion.path
                    d="M 20 2 C 4 22, 36 42, 20 52"
                    {...line}
                />
                <motion.path
                    className="journey-arrow__head"
                    d="M 11 52 L 20 63 L 29 52 Z"
                    {...head}
                />
            </svg>


        </div>
    );
}