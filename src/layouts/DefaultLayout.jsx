import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {
    return (
        <>
            <AppHeader />
            <div className="page-scroll">
                <main>
                    <Outlet />
                </main>
                <AppFooter />
            </div>
        </>
    )
}