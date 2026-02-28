import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { SafePage } from "./pages/extras/SafePage"
import { ProximamentePage } from "./pages/extras/Proximamente"
import { Dashboard } from "./pages/Dashboard"
import { Profile } from "./pages/Profile"
import { ConsultasPage } from "./pages/Consultas"
import { ConsultaDetail } from "./pages/ConsultaDetail"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/safe" element={<SafePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/consultas" element={<ConsultasPage />} />
      <Route path="/consultas/:id" element={<ConsultaDetail />} />
      <Route path="*" element={<ProximamentePage />} />
    </Routes>
  )
}

export default App
