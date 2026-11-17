import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OFFSETS = {
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
};

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, from = 'up', as = 'div', className }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2 });
    const Tag = motion[as];
    const { x, y } = OFFSETS[from];

    return (
        // il wrapper non si muove: è lui che viene osservato
        <div ref={ref} style={{ height: '100%' }}>
            <Tag
                className={className}
                initial={{ opacity: 0, x, y }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
                transition={
                    inView
                        ? { duration: 0.9, delay, ease: EASE }
                        : { duration: 0.6, ease: 'easeIn' }
                }
            >
                {children}
            </Tag>
        </div>
    );
}