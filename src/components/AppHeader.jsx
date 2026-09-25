export default function AppHeader() {

    return (
        <header className='site-header'>
            <nav className="navbar navbar-expand-md py-3">
                <div className="container">
                    <span className="brand navbar-brand" href="#">Pietro Bertino</span>
                    <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navMenu">
                        <ul className="navbar-nav gap-md-4">
                            <li className="nav-item"><a className="nav-link" href="#progetti">Progetti</a></li>
                            <li className="nav-item"><a className="nav-link" href="#competenze">Competenze</a></li>
                            <li className="nav-item"><a className="nav-link" href="#chi-sono">Chi sono</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contatti">Contatti</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}