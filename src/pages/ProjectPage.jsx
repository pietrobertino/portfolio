import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectPage() {

    const { slug } = useParams()

    const project = projects.find(project => project.slug === slug);


    // Qui lascerei parlare soprattutto il lavoro. Se puoi, per ogni progetto mostra:

    // Cosa hai realizzato.

    // Quali problemi hai risolto.

    // Le tecnologie utilizzate.

    // Una breve descrizione delle scelte progettuali.

    return (
        <h1>{project.title}</h1>

    )
}