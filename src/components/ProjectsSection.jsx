import ProjectCard from "./ProjectCard"
import projects from "../data/projects"

export default function ProjectsSection() {

    return (
        <section id="progetti" className="py-5">
            <div className="container">
                <h2 className="section-title">Progetti</h2>
                <p className="section-sub">Una selezione dei miei lavori recenti.</p>
                <div className="projects-track" tabIndex="0" aria-label="Elenco progetti">

                    {projects.map(project => (
                        <div className="project-item" key={project.id}>
                            <ProjectCard projectObj={project} />
                        </div>
                    )

                    )}
                </div>
            </div>
        </section>
    )
}