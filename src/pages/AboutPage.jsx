import { useEffect } from "react"
import { usePage } from "../contexts/PageContext"

export default function AboutPage() {

    const { setHomePage } = usePage();

    useEffect(() => {
        setHomePage(false);
    }, [])


    return (
        <div className="container">
            <h1>Su di me</h1>
        </div>
    )
}