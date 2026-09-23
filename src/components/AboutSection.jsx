export default function AboutSection() {

    return (
        <section id="chi-sono" className="border-top-section py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-md-4">
                        <div className="about-photo">foto profilo</div>
                    </div>
                    <div className="col-md-8 about-text">
                        <h2 className="section-title">Chi sono</h2>
                        <p>Racconta qui, in poche righe, come hai iniziato a programmare: il primo progetto, cosa ti ha convinto a farne un mestiere. Evita frasi generiche tipo "appassionato di tecnologia" — sii specifico su un episodio o una scelta reale.</p>
                        <p>Poi la tua filosofia di lavoro: come scrivi codice, cosa curi di più (leggibilità, testing, performance), come lavori in team. Due o tre frasi bastano.</p>
                        <a href="#" className="btn btn-accent px-4 py-2 mt-2" download>Scarica CV (PDF)</a>
                    </div>
                </div>
            </div>
        </section>
    )
}