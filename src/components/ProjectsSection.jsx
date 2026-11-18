import { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'react-bootstrap-icons';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

export default function ProjectsSection() {
    const { t, lang } = useLanguage();
    const text = t.home.projects;

    const [over, setOver] = useState(false);
    const mx = useMotionValue(-200);
    const my = useMotionValue(-200);
    const sx = useSpring(mx, { stiffness: 400, damping: 32, mass: 0.4 });
    const sy = useSpring(my, { stiffness: 400, damping: 32, mass: 0.4 });

    const onMove = (e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
        setOver(Boolean(e.target.closest('.project-panel')));
    };

    return (
        <section id="progetti">
            <div className="container pt-5 pb-4">
                <Reveal as="h1" from="left" className="section-title">{text.title}</Reveal>
                <Reveal as="p" from="left" delay={0.1} className="section-sub">{text.subtitle}</Reveal>
            </div>

            <div className="projects-stage" onMouseMove={onMove} onMouseLeave={() => setOver(false)}>
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} projectObj={project} index={i} />
                ))}

                <motion.div
                    className="project-cursor"
                    style={{ x: sx, y: sy }}
                    animate={{ opacity: over ? 1 : 0, scale: over ? 1 : 0.4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    aria-hidden="true"
                >
                    <span>{lang === 'it' ? 'Visita' : 'Visit'}</span>
                    <ArrowUpRight size={18} />
                </motion.div>
            </div>
        </section>
    );
}