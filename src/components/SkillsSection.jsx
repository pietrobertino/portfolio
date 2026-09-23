export default function SkillsSection() {

    return (
        <section id="competenze" className="border-top-section py-5">
            <div className="container">
                <h2 className="section-title">Competenze tecniche</h2>
                <p className="section-sub">Strumenti e linguaggi che uso concretamente nel lavoro quotidiano.</p>
                <div className="row g-4">
                    <div className="col-md-4 skill-group">
                        <h3>Frontend</h3>
                        <ul className="skill-list">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Bootstrap / CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className="col-md-4 skill-group">
                        <h3>Backend</h3>
                        <ul className="skill-list">
                            <li></li>
                            <li>Node.js / Express.js</li>
                            <li>MySQL </li>
                            <li>API REST</li>
                        </ul>
                    </div>
                    <div className="col-md-4 skill-group">
                        <h3>DevOps / Tools</h3>
                        <ul className="skill-list">
                            <li>Git / GitHub</li>
                            <li>Docker</li>
                            <li>Linux (server)</li>
                            <li>CI/CD di base</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}