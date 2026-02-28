import { LoginCard } from "@/components/custom/LoginCard"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const goToDashboard = () => {
    // Lógica de autenticación aquí (si es necesario)
    console.log("Autenticando paciente...")
    navigate("/dashboard")
  }

  return (
    <main className="w-screen max-w-md mx-auto flex flex-col justify-center items-center h-svh px-4">
      <LoginCard onSubmit={goToDashboard} />
    </main>
  )
}