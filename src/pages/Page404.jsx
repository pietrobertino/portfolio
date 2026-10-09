import { Link } from "react-router-dom";

export default function Page404() {

    return (
        <>
            <section className="notfound">
                <div className="container">
                    <div className="notfound-terminal">
                        <div className="notfound-bar" aria-hidden="true">
                            <span></span><span></span><span></span>
                        </div>

                        <div className="notfound-body">
                            <p className="notfound-line">$ cd /pagina-che-cercavi</p>
                            <p className="notfound-error">bash: cd: no such file or directory</p>

                            <p className="notfound-code" aria-hidden="true">404</p>
                            <h1>Wrong way</h1>
                            <p className="notfound-text">
                                La pagina che cerchi non esiste o è stata spostata.
                            </p>

                            <Link to="/" className="btn btn-accent px-4 py-2">
                                Torna alla homepage
                            </Link>

                            <p className="notfound-line mt-4 mb-0">
                                $ <span className="notfound-cursor"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}