export default function HeroSpace() {
    return (
        <section className="hero">
            <div className="container">
                <div className="eyebrow mb-3">&lt;AboutMe /&gt;</div>
                <h1 className="mb-3">Ciao, sono Pietro. Full Stack Developer specializzato in React ed Express.</h1>
                <p className="lead mb-4">Costruisco applicazioni web solide, dal backend Express alle interfacce React — con un occhio di riguardo per codice manutenibile e performance reali.</p>
                <div className="d-flex gap-3 flex-wrap">
                    <a href="#progetti" className="btn btn-accent px-4 py-2">Guarda i progetti</a>
                    <a href="#contatti" className="btn btn-outline-accent px-4 py-2">Contattami</a>
                </div>
            </div>
        </section>
    )
}