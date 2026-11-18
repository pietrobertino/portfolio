import { useEffect } from 'react';
import ProjectsSection from '../components/ProjectsSection';
import { usePage } from '../contexts/PageContext';

export default function ProjectsPage() {
    const { setHomePage } = usePage();

    useEffect(() => {
        setHomePage(false);
    }, []);

    return <ProjectsSection />;
}