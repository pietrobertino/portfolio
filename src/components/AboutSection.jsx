import { useLanguage } from "../contexts/LanguageContext"

export default function AboutSection() {

    const { t } = useLanguage();
    const text = t.about;

    return (
        <section id="chi-sono" className="border-top-section py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-4">
                        <div className="about-photo">
                            <img src="profilo.png" alt="foto profilo" />
                        </div>
                    </div>
                    <div className="col-md-8 about-text">
                        <h2 className="section-title">{text.title}</h2>
                        <p>{text.p1}</p>
                        <p>{text.p2}</p>
                        <a href="/CV_Pietro_Bertino.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-accent px-4 py-2 mt-2 me-3">{text.btn1}</a>
                        <a href="/CV_Pietro_Bertino.pdf" className="btn btn-accent px-4 py-2 mt-2" download>{text.btn2}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}