import { HeaderApp } from "@/components/custom/HeaderApp"
import { ChevronLeft, Calendar, User } from "lucide-react"
import { IconDescription } from "@/components/custom/IconDescription"
import iconConsulta from "@/src/assets/icon-consulta.svg"
import { consulta } from "@/utils/examples/encounter"
import iconProfesional from "@/src/assets/icon-profesional.svg"
import iconProcedimiento from "@/src/assets/icon-procedimientos.svg"
import iconHallazgo from "@/src/assets/icon-hallazgos.svg"
import { DienteDetail } from "@/components/custom/DienteDetail"

export const ConsultaDetail = () => {

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
          <h1 className="text-2xl font-semibold text-slate-900">Detalle de consulta</h1>
        </header>

        <section className="flex flex-col gap-y-6">

          <article className="w-full flex gap-x-4">
            <img src={iconConsulta} className="size-10" />
            <div
              id="consulta-info"
              className="flex flex-col gap-y-2"
            >

              <h3 className="text-slate-900 font-medium text-lg line-clamp-1">Consulta odontológica</h3>
              <IconDescription
                icon={<Calendar className="size-4" />}
                description={`${new Date(consulta.period.start).toLocaleDateString()}`}
                type="detalle"
              />
              <span className="w-fit text-sm font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-sm border border-slate-200">
                {consulta.status == "finished" ? "Finalizada" : "En curso"}
              </span>
            </div>
          </article>

          <div className="h-0.5 bg-slate-100 w-full" />

          <article className="w-full flex gap-x-4">
            <img src={iconProfesional} className="size-10" />

            <div
              id="consulta-info"
              className="flex flex-col gap-y-2"
            >
              <h3 className="text-slate-900 font-medium text-lg line-clamp-1">Profesional</h3>
              <IconDescription
                icon={<User className="size-4" />}
                description={`${consulta.participant[0].individual.display}`}
                type="detalle"
              />

            </div>

          </article>

          <div className="h-0.5 bg-slate-100 w-full" />

          <article className="w-full flex gap-x-4">
            <img src={iconHallazgo} className="size-10" />

            <div
              id="consulta-info"
              className="flex flex-col gap-y-2"
            >
              <h3 className="text-slate-900 font-medium text-lg line-clamp-1">Hallazgos</h3>
              
              {/* 
              Para cuando funcionen los endpoints y se pueda obtener la información real desde el servidor, mapear los hallazgos de la consulta. Por ahora, como no hay información de diente afectado en el objeto de ejemplo, mostrar un placeholder.
              {consulta.diagnosis.map((diagnostico, index) => (
                <DienteDetail titulo={diagnostico.description} diente={diagnostico.diente} key={index} />
              ))} */}

              <DienteDetail titulo="Caries dental" diente="Segundo premolar superior derecho permanente completo" />
              <DienteDetail titulo="Abceso" diente="Segundo premolar superior izquierdo permanente completo" />

            </div>

          </article>

          <div className="h-0.5 bg-slate-100 w-full" />

          <article className="w-full flex gap-x-4">
            <img src={iconProcedimiento} className="size-10" />

            <div
              id="consulta-info"
              className="flex flex-col gap-y-2"
            >
              <h3 className="text-slate-900 font-medium text-lg line-clamp-1">Procedimientos</h3>
              
              {/* 
              Para cuando funcionen los endpoints y se pueda obtener la información real desde el servidor, mapear los hallazgos de la consulta. Por ahora, como no hay información de diente afectado en el objeto de ejemplo, mostrar un placeholder.
              {consulta.diagnosis.map((diagnostico, index) => (
                <DienteDetail titulo={diagnostico.description} diente={diagnostico.diente} key={index} />
              ))} */}

              <DienteDetail titulo="Limpieza de sarro" diente="Tercer molar inferior izquierdo permanente completo" />
              <DienteDetail titulo="Extracción de diente permanente" diente="Segundo molar inferior derecho permanente completo" />

            </div>

          </article>


        </section>


      </main>
    </>
  )
}