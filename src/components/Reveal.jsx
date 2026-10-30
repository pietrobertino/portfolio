// Reveal.jsx
import { motion } from 'framer-motion';

const OFFSETS = {
    up: { x: 0, y: 24 },
    left: { x: -40, y: 0 },   // arriva da sinistra
    right: { x: 40, y: 0 },   // arriva da destra
};

export default function Reveal({ children, delay = 0, from = 'up', as = 'div', className }) {
    const Tag = motion[as];
    const { x, y } = OFFSETS[from];

    return (
        <Tag
            className={className}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </Tag>
    );
}