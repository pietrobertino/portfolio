import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { LanguageContextProvider } from "./contexts/LanguageContext"
import Page404 from "./pages/Page404"
import LanguageGuard from "./components/LanguageGuard"

function App() {

  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to='/it' replace />} />
          <Route path="/:lang" element={<LanguageGuard />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </LanguageContextProvider>
  )
}

export default App
