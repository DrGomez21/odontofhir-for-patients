import { HeaderApp } from "@/components/custom/HeaderApp"
import { PatientCard } from "@/components/custom/PatientCard"
import { TitleDescription } from "@/components/custom/TitleDescription"
import { patient } from "@/utils/examples/patient"


export const Dashboard = () => {

  // Función a implementar a futuro con HAPI FHIR
  // const getPatientById = (id) => {
  //   return
  // }

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
          <PatientCard patient={patient} />
        </section>

        <section className="w-full flex flex-col gap-2">
          <TitleDescription title="Historia odontológica" description="Encontrá toda tu historia odontológica, de consultorios que utilizan tecnología FHIR." />
          <PatientCard patient={patient} />
        </section>
      </main>
    </>
  )
}