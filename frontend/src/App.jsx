import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { SafePage } from "./pages/extras/SafePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/safe" element={<SafePage />} />
    </Routes>
  )
}

export default App
