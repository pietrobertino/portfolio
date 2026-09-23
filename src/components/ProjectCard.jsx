export default function ProjectCard() {

    return (
        <div className="project-card">
            <div className="project-thumb">screenshot / mockup progetto</div>
            <div className="card-body">
                <h3>Nome Progetto</h3>
                <p className="desc">Breve descrizione del problema reale che il progetto risolve e per chi. Una o due frasi, concrete, senza gergo di marketing.</p>
                <div className="mb-3">
                    <span className="stack-tag">Laravel</span>
                    <span className="stack-tag">MySQL</span>
                    <span className="stack-tag">Bootstrap</span>
                </div>
                <div className="project-links">
                    <a href="https://github.com/" target="_blank" rel="noopener">GitHub →</a>
                    <a href="#" target="_blank" rel="noopener">Demo live →</a>
                </div>
            </div>
        </div>
    )
}