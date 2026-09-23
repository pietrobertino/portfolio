import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {

    return (
        <section id="progetti" className="py-5">
            <div className="container">
                <h2 className="section-title">Progetti</h2>
                <p className="section-sub">Una selezione di lavori recenti, con il problema affrontato e lo stack usato.</p>
                <div className="row g-4">

                    <div className="col-md-6 col-lg-4">
                        <ProjectCard />
                    </div>

                </div>
            </div>
        </section>
    )
}