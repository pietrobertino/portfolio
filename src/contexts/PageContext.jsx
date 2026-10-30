import { createContext, useState, useContext } from "react";

const PageContext = createContext();

export function PageContextProvider({ children }) {

    const [homePage, setHomePage] = useState(true);


    return (
        <PageContext.Provider value={{ homePage, setHomePage }}>
            {children}
        </PageContext.Provider>
    );
}

export function usePage() {
    return useContext(PageContext);
}