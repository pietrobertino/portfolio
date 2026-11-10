import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext"

export default function ProjectCard({ projectObj }) {

    const { lang } = useLanguage();

    return (

        <Link to={`/${lang}/projects/${projectObj.slug}`}>
            <div className="project-card">
                <div className="project-thumb">
                    <img src={projectObj.img} alt={projectObj.title} />
                </div>
                <div className="card-body">
                    <h3>{projectObj.title}</h3>
                    <p className="desc">{projectObj.description[lang]}</p>
                    {/* <div className="mb-3">
                    {projectObj.stack.map(stack => (
                        <span className="stack-tag" key={stack}>{stack}</span>
                    ))}
                </div> */}
                </div>
            </div>
        </Link>

    )
}