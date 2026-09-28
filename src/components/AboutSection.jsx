export default function AboutSection() {

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
                        <h2 className="section-title">Chi sono</h2>
                        <p>Dopo essermi affacciato al mondo della programmazione all'università, ho realizzato che il codice è ciò per cui sono portato e che è in grado di darmi soddisfazione, così ho deciso di renderlo il mio mestiere. </p>
                        <p>Scrivo codice ponendo attenzione alla leggibilità e alla chiarezza, lo gestisco in modo organizzato. In team mi piace suddividere il lavoro in modo preciso e collaborare su parti condivise.</p>
                        <a href="/CV_Pietro_Bertino.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-accent px-4 py-2 mt-2 me-3">Visualizza CV (PDF)</a>
                        <a href="/CV_Pietro_Bertino.pdf" className="btn btn-accent px-4 py-2 mt-2" download>Scarica CV (PDF)</a>
                    </div>
                </div>
            </div>
        </section>
    )
}