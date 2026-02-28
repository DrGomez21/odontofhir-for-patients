import { Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Login"
import { SafePage } from "./pages/extras/SafePage"
import { ProximamentePage } from "./pages/extras/Proximamente"
import { Dashboard } from "./pages/Dashboard"
import { Profile } from "./pages/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/safe" element={<SafePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<ProximamentePage />} />
    </Routes>
  )
}

export default App
