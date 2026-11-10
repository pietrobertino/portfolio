import { useEffect } from "react";
import ProjectsSection from "../components/ProjectsSection";
import { usePage } from "../contexts/PageContext";

export default function ProjectsPage() {

    const { setHomePage } = usePage();

    useEffect(() => {
        setHomePage(false);
    }, [])

    return (
        <div className="container">
            <h1 className=" py-5">I miei progetti</h1>
            <ProjectsSection />
        </div>
    )
}