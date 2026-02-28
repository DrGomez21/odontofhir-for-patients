import { HeaderApp } from "@/components/custom/HeaderApp"
import { Historia } from "@/components/custom/Historia"
import { HistoriaItem } from "@/components/custom/HistoriaItem"
import { consultasList } from "@/utils/examples/encounterList"
import { patient } from "@/utils/examples/patient"
import { ChevronLeft } from "lucide-react"


export const HistoriaPage = () => {

  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <HeaderApp />

      <main className="w-screen max-w-md mx-auto h-full flex flex-col px-4 py-2 gap-y-6">

        <header className="flex items-center gap-2">
          <ChevronLeft className="cursor-pointer" onClick={goBack} />
          <h1 className="text-2xl font-semibold text-slate-900">Historia odontológica</h1>
        </header>

        <section className="w-full flex flex-col gap-y-2 border border-slate-200 rounded-md">

          <Historia patient={patient} />

          {consultasList.map((consulta) => (
            <HistoriaItem consulta={consulta} />
          ))}

        </section>

      </main>

    </>
  )
}