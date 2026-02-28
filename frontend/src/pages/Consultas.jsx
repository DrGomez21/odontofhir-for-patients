import { ConsultaCard } from "@/components/custom/ConsultaCard"
import { consultasList } from "@/utils/examples/encounterList"
import { HeaderApp } from "@/components/custom/HeaderApp"
import { ChevronLeft } from "lucide-react"

export const ConsultasPage = () => {

  // Acá debería ir la lógica para obtener las consultas del backend y mostrarlas en la interfaz de usuario.
  // TODO: Implementar la lógica para obtener las consultas del backend y mostrarlas en la interfaz de usuario. Installar Axios y tanstack para hacer las peticiones al backend y mostrar los datos en la interfaz de usuario.

  // Por ahora, solo mostramos datos de ejemplo para ilustrar cómo se vería la interfaz de usuario.


  // Funciones
  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <HeaderApp />
      <main className="w-screen max-w-md mx-auto h-svh flex flex-col px-4 py-2 gap-y-6">

        <header className="flex items-center gap-2">
          <ChevronLeft className="cursor-pointer" onClick={goBack} />
          <h1 className="text-2xl font-semibold text-slate-900">Consultas</h1>
        </header>

        <section className="flex flex-col gap-y-8">
          {
            consultasList.length > 0 ? (
              consultasList.map((consulta, index) => (
                <ConsultaCard key={index} consulta={consulta} showBadge />
              ))
            ) : (
              <p className="text-slate-500 text-center">No se encontraron consultas para este paciente.</p>
            )
          }
        </section>

      </main>
    </>
  )
}