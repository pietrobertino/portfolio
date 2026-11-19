import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';
import { ArrowUpRight } from 'react-bootstrap-icons';
import Reveal from './Reveal';

const STACK = [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26', url: 'https://developer.mozilla.org/docs/Web/HTML' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', url: 'https://developer.mozilla.org/docs/Web/CSS' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
    { name: 'React', icon: FaReact, color: '#61DAFB', url: 'https://react.dev' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', url: 'https://getbootstrap.com' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4', url: 'https://www.php.net' },
    { name: 'Laravel', icon: FaLaravel, color: '#FF2D20', url: 'https://laravel.com' },
    { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E', url: 'https://nodejs.org' },
    { name: 'Express', icon: SiExpress, color: '#e8e8e8', url: 'https://expressjs.com' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', url: 'https://www.mysql.com' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', url: 'https://git-scm.com' },
];

export default function AboutStack() {
    return (
        <section className="about-block">
            <div className="container">
                <div className="about-head">
                    <Reveal as="h2" from="up" className="section-title">Le tecnologie che uso</Reveal>
                    <Reveal as="p" from="up" delay={0.1} className="section-sub">
                        Gli strumenti con cui costruisco i miei progetti. Clicca su uno per scoprire di più.
                    </Reveal>
                </div>

                <div className="stack-grid">
                    {STACK.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                            <Reveal key={tech.name} from="up" delay={(i % 6) * 0.06} className="h-100">
                                <a
                                    className="stack-item"
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ '--c': tech.color }}
                                >
                                    <Icon size={36} />
                                    <span>{tech.name}</span>
                                    <ArrowUpRight className="stack-item__arrow" size={14} />
                                </a>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}