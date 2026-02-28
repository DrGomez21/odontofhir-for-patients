import { HeaderApp } from "@/components/custom/HeaderApp"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, ChevronLeft, CreditCard, Map, Phone, User } from "lucide-react"
import { patient } from "@/utils/examples/patient"
import { IconDescription } from "@/components/custom/IconDescription"
import { TitleDescription } from "@/components/custom/TitleDescription"

export const Profile = () => {

  // se debe hacer una consulta a sus alergia e intolerancias para mostrarlas en su perfil.

  const goBack = () => {
    console.log("Volver al dashboard")
    window.history.back()
  }

  return (
    <>
      <HeaderApp />
      <main className="w-screen max-w-md mx-auto h-svh flex flex-col px-4 py-2 gap-y-6">

        <header className="flex items-center gap-2">
          <ChevronLeft className="cursor-pointer" onClick={goBack} />
          <h1 className="text-2xl font-semibold text-slate-900">Perfil del Paciente</h1>
        </header>

        <div className="flex flex-col items-center gap-2">
          <Avatar className="size-18">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="foto del paciente"
            />
          </Avatar>
          <h2 className="text-2xl font-semibold text-slate-900">{patient.name[0].given[0]} {patient.name[0].family}</h2>
        </div>

        <section className="flex flex-col gap-y-4">
          <article className="space-y-1">
            <IconDescription icon={<User />} description={"Género"} type="titulo" />
            <p className="text-slate-500">{patient.gender == "male" ? "Masculino" : "Femenino"}</p>
          </article>

          <article className="space-y-1">
            <IconDescription icon={<CreditCard />} description={"Identificación"} type="titulo" />
            <p className="text-slate-500">{patient.identifier[0].value}</p>
          </article>

          <article className="space-y-1">
            <IconDescription icon={<CalendarDays />} description={"Fecha de nacimiento"} type="titulo" />
            <p className="text-slate-500">{patient.birthDate}</p>
          </article>

          <article className="space-y-1">
            <IconDescription icon={<Phone />} description={"Teléfono"} type="titulo" />
            <p className="text-slate-500">{patient.telecom[0].value}</p>
          </article>

          <article className="space-y-1">
            <IconDescription icon={<Map />} description={"Dirección"} type="titulo" />
            <p className="text-slate-500">230, Barrio Obrero, Asunción</p>
          </article>
        </section>

        {/* <TitleDescription title="Alergias e intolerancias" description="Tené en cuenta tus alergias e intolerancias para evitar complicaciones." />
        <section className="flex flex-col gap-y-4">
          <article className="space-y-1">
            <IconDescription icon={<User />} description={"Alergia a la penicilina"} type="titulo" />
            <p className="text-slate-500">Reacción alérgica con erupción cutánea y dificultad para respirar.</p>
          </article>
        </section> */}

        <TitleDescription title="OdontoFhir ID" description="Escaneá el código QR para que vos u otros obtengan tu OdontoFhir ID." />


      </main>
    </>
  )
}