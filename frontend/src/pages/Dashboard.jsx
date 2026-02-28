import { ConsultaCard } from "@/components/custom/ConsultaCard"
import { HeaderApp } from "@/components/custom/HeaderApp"
import { PatientCard } from "@/components/custom/PatientCard"
import { TitleDescription } from "@/components/custom/TitleDescription"
import { patient } from "@/utils/examples/patient"
import { consulta } from "@/utils/examples/encounter"
import Carpeta from "@/src/assets/folder.svg"
import { Historia } from "@/components/custom/Historia"


export const Dashboard = () => {

  // Función a implementar a futuro con HAPI FHIR
  // const getPatientById = (id) => {
  //   return
  // }


  const goToConsultas = () => {
    console.log("Consultas")
  }

  return (
    <>
      <HeaderApp />
      <main className="w-screen max-w-md mx-auto h-svh flex flex-col px-4 py-2 gap-y-6">
        <section className="w-full flex flex-col gap-2">
          <TitleDescription title="Perfil del Paciente" description="Tenés el control sobre toda tu información." />
          <PatientCard patient={patient} />
        </section>

        <section className="w-full flex flex-col gap-2">
          <TitleDescription title="Consultas" description="Hacé seguimiento de todas las consultas que hiciste." />

          {/* Acá va una grilla con una card de consulta y una imagen del folder */}
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="col-span-2">
              <ConsultaCard consulta={consulta} showBadge={false} />
            </div>
            <img src={Carpeta} alt="Carpeta de consultas" className="h-full" onClick={goToConsultas}/>
          </div>
        </section>

        <section className="w-full flex flex-col gap-2">
          <TitleDescription title="Historia odontológica" description="Encontrá toda tu historia odontológica, de consultorios que utilizan tecnología FHIR." />
          <Historia patient={patient} />
        </section>
      </main>
    </>
  )
}