import ProjectCard from "./ProjectCard"
import projects from "../data/projects"

export default function ProjectsSection() {

    return (
        <section id="progetti" className="py-5">
            <div className="container">
                <h2 className="section-title">Progetti</h2>
                <p className="section-sub">Una selezione di lavori recenti, con il problema affrontato e lo stack usato.</p>
                <div className="row g-4">

                    {projects.map(project => (
                        <div className="col-md-6 col-lg-4" key={project.id}>
                            <ProjectCard projectObj={project} />
                        </div>
                    )

                    )}

                </div>
            </div>
        </section>
    )
}