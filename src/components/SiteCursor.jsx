import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const INTERACTIVE_SELECTOR =
    'a, button, [role="button"], input, textarea, select, .project-card, .svc-card, .why-me-card, .contact-card, .stack-item, .journey-card';

export default function SiteCursor() {
    const reduce = useReducedMotion();
    const [visible, setVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const ringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.5 });
    const ringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.5 });

    useEffect(() => {
        if (reduce) return;

        const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!isFinePointer) return;

        const handleMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setVisible(true);

            const target = e.target instanceof Element ? e.target.closest(INTERACTIVE_SELECTOR) : null;
            setIsHovering(Boolean(target));
        };

        const handleLeave = () => {
            setVisible(false);
            setIsHovering(false);
        };

        const handleDown = () => setIsPressed(true);
        const handleUp = () => setIsPressed(false);

        window.addEventListener("mousemove", handleMove, { passive: true });
        document.addEventListener("mouseleave", handleLeave);
        window.addEventListener("mousedown", handleDown);
        window.addEventListener("mouseup", handleUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseleave", handleLeave);
            window.removeEventListener("mousedown", handleDown);
            window.removeEventListener("mouseup", handleUp);
        };
    }, [reduce, mouseX, mouseY]);

    if (reduce || !visible) return null;

    return (
        <div className="site-cursor-layer" aria-hidden="true">
            <motion.div
                className={`site-cursor__ring ${isHovering ? "is-hover" : ""} ${isPressed ? "is-down" : ""}`}
                style={{ x: ringX, y: ringY }}
            />
            <motion.div
                className={`site-cursor__dot ${isHovering ? "is-hover" : ""}`}
                style={{ x: mouseX, y: mouseY }}
            />
        </div>
    );
}