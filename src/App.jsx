import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { LanguageContextProvider } from "./contexts/LanguageContext"

function App() {

  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<HomePage />} />
          <Route index element={<Navigate to='/it' replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageContextProvider>
  )
}

export default App
