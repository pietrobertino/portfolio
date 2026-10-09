import Page404 from "../pages/Page404"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function LanguageGuard() {

    const { lang } = useParams();

    if (lang !== 'it' && lang !== 'en') {

        return (
            <Page404 />
        )
    } else return <Outlet />
}
