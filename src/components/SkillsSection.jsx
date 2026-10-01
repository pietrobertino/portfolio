import skills from "../data/skills"
import { useLanguage } from "../contexts/LanguageContext"

export default function SkillsSection() {

    const { t } = useLanguage();
    const text = t.skills;

    return (
        <section id="competenze" className="border-top-section py-5">
            <div className="container">
                <h2 className="section-title">{text.title}</h2>
                <p className="section-sub">{text.subtitle}</p>
                <div className="row g-4">
                    <div className="col-md-4 skill-group">
                        <h3>Frontend</h3>
                        <ul className="skill-list">
                            {skills.frontend.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4 skill-group">
                        <h3>Backend</h3>
                        <ul className="skill-list">
                            {skills.backend.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4 skill-group">
                        <h3>DevOps / Tools</h3>
                        <ul className="skill-list">
                            {skills.tools.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}