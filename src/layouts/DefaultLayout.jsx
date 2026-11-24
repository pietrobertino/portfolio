import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import SiteCursor from "../components/SiteCursor";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <div className="page-scroll">
                <main>
                    <Outlet />
                </main>
                <AppFooter />
                <SiteCursor />
            </div>
        </>
    )
}