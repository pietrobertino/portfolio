import { createContext, useState, useContext } from "react";
import texts from "../data/texts";

const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {

    const [lang, setLang] = useState('it');

    const t = texts[lang];

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}