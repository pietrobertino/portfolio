import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { LanguageContextProvider } from "./contexts/LanguageContext"
import Page404 from "./pages/Page404"
import LanguageGuard from "./components/LanguageGuard"
import AboutPage from "./pages/AboutPage"
import DefaultLayout from "./layouts/DefaultLayout"
import { PageContextProvider } from "./contexts/PageContext"

function App() {

  return (
    <LanguageContextProvider>
      <PageContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate to='/it' replace />} />
            <Route path="/:lang" element={<LanguageGuard />}>
              <Route element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/:lang/about" element={<AboutPage />} />
              </Route>
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </PageContextProvider>
    </LanguageContextProvider>
  )
}

export default App
