import ProjectCard from "./ProjectCard"
import projects from "../data/projects"
import { useLanguage } from "../contexts/LanguageContext"

export default function ProjectsSection() {

    const { t } = useLanguage();
    const text = t.projects;

    return (
        <section id="progetti" className="py-5">
            <div className="container">
                <h2 className="section-title">{text.title}</h2>
                <p className="section-sub">{text.subtitle}</p>
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