import { useEffect, useRef, useState } from 'react';
import workflow from '../data/workflow';
import Reveal from './Reveal';

const DESKTOP = '(min-width: 768px)';
const LINE_X = 14; // posizione della linea su mobile (px)

export default function WorkflowSection() {
    const wrapRef = useRef(null);
    const fillRef = useRef(null);
    const headRef = useRef(null);
    const [geo, setGeo] = useState(null);   // { w, h, d, nodes }
    const [active, setActive] = useState(-1);
    const [desktop, setDesktop] = useState(() => window.matchMedia(DESKTOP).matches);

    // Segue il cambio di breakpoint
    useEffect(() => {
        const mq = window.matchMedia(DESKTOP);
        const onChange = (e) => setDesktop(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    // 1) Misura le card e costruisce il percorso curvo
    useEffect(() => {
        const wrap = wrapRef.current;

        const measure = () => {
            const items = wrap.querySelectorAll('.workflow-item');

            const nodes = Array.from(items).map((el) => {
                if (desktop) {
                    const isLeft = el.offsetLeft + el.offsetWidth / 2 < wrap.offsetWidth / 2;
                    return {
                        x: isLeft ? el.offsetLeft + el.offsetWidth : el.offsetLeft,
                        y: el.offsetTop + el.offsetHeight / 2,
                    };
                }
                return { x: LINE_X, y: el.offsetTop + 34 };
            });

            let d = `M ${nodes[0].x} ${nodes[0].y}`;
            for (let i = 1; i < nodes.length; i++) {
                const a = nodes[i - 1];
                const b = nodes[i];
                const m = (a.y + b.y) / 2;
                d += ` C ${a.x} ${m}, ${b.x} ${m}, ${b.x} ${b.y}`;
            }

            setGeo({ w: wrap.offsetWidth, h: wrap.offsetHeight, d, nodes });
        };

        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(wrap);
        return () => ro.disconnect();
    }, [desktop]);

    // 2) Colora il percorso in base allo scroll
    useEffect(() => {
        if (!geo) return;

        const wrap = wrapRef.current;
        const fill = fillRef.current;
        const head = headRef.current;
        const scroller = wrap.closest('.page-scroll') || window;
        const total = fill.getTotalLength();
        const { nodes } = geo;
        const yTop = nodes[0].y;
        const yBottom = nodes[nodes.length - 1].y;

        fill.style.strokeDasharray = total;

        let frame = 0;
        const update = () => {
            frame = 0;

            const viewTop = scroller === window ? 0 : scroller.getBoundingClientRect().top;
            const viewH = scroller === window ? window.innerHeight : scroller.clientHeight;
            // "linea di lettura": al 60% dell'altezza visibile
            const readY = viewTop + viewH * 0.6 - wrap.getBoundingClientRect().top;

            let length;
            if (readY <= yTop) length = 0;
            else if (readY >= yBottom) length = total;
            else {
                let lo = 0;
                let hi = total;
                for (let i = 0; i < 18; i++) {
                    const mid = (lo + hi) / 2;
                    if (fill.getPointAtLength(mid).y < readY) lo = mid;
                    else hi = mid;
                }
                length = lo;
            }

            fill.style.strokeDashoffset = total - length;

            if (length > 0 && length < total) {
                const p = fill.getPointAtLength(length);
                head.style.left = `${p.x}px`;
                head.style.top = `${p.y}px`;
                head.style.opacity = 1;
            } else {
                head.style.opacity = 0;
            }

            setActive(nodes.filter((n) => n.y <= readY).length - 1);
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        scroller.addEventListener('scroll', onScroll, { passive: true });
        update();

        return () => {
            scroller.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, [geo]);

    return (
        <section id="workflow" className="border-top-section py-5">
            <div className="container">
                <Reveal as="h2" from="left" className="section-title">Il mio approccio</Reveal>
                <Reveal as="p" from="left" delay={0.1} className="section-sub">Come lavoriamo insieme?</Reveal>

                <div className="workflow" ref={wrapRef}>
                    {geo && (
                        <>
                            <svg
                                className="workflow-path"
                                width={geo.w}
                                height={geo.h}
                                viewBox={`0 0 ${geo.w} ${geo.h}`}
                                aria-hidden="true"
                            >
                                <path className="workflow-path__track" d={geo.d} />
                                <path className="workflow-path__fill" d={geo.d} ref={fillRef} />
                            </svg>

                            {geo.nodes.map((n, i) => (
                                <span
                                    key={i}
                                    className={`workflow-node${i <= active ? ' is-active' : ''}`}
                                    style={{ left: n.x, top: n.y }}
                                    aria-hidden="true"
                                />
                            ))}

                            <span className="workflow-head" ref={headRef} aria-hidden="true" />
                        </>
                    )}

                    <ol className="workflow-list">
                        {workflow.map((step, i) => (
                            <li key={step.number} className="workflow-item">
                                <Reveal from={desktop ? (i % 2 === 0 ? 'left' : 'right') : 'up'}>
                                    <div
                                        className={`workflow-step${i <= active ? ' is-active' : ''}${step.optional ? ' workflow-step--optional' : ''}`}
                                    >
                                        <div className="workflow-step__number">{step.number}</div>

                                        <div className="workflow-step__content">
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>

                                            <ul>
                                                {step.tasks.map((task, index) => (
                                                    <li key={index}>{task}</li>
                                                ))}
                                            </ul>

                                            {step.optional && (
                                                <span className="workflow-step__note">
                                                    Servizio opzionale, con tariffa mensile concordata in base alle caratteristiche del progetto.
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}