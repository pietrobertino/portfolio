export default function ContactsSection() {

    return (
        <section id="contatti" className="border-top-section py-5">
            <div className="container">
                <h2 className="section-title">Contatti</h2>
                <p className="section-sub">Il modo più veloce per raggiungermi.</p>
                <div className="row g-3 contact-links">
                    <div className="col-md-4">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
                    </div>
                    <div className="col-md-4">
                        <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
                    </div>
                    <div className="col-md-4">
                        <a href="mailto:bertinopietro20@gmail.com">bertinopietro20@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}