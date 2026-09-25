export default function ProjectCard({ projectObj }) {

    return (
        <div className="project-card">
            <div className="project-thumb">
                <img src={projectObj.img} alt={projectObj.title} />
            </div>
            <div className="card-body">
                <h3>{projectObj.title}</h3>
                <p className="desc">{projectObj.description}</p>
                <div className="mb-3">
                    {projectObj.stack.map(stack => (
                        <span className="stack-tag" key={stack}>{stack}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={projectObj.link_github} target="_blank" rel="noopener">GitHub →</a>
                    <a href={projectObj.link_demo} target="_blank" rel="noopener">Demo live →</a>
                </div>
            </div>
        </div>
    )
}