import { Calendar, Phone } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { IconDescription } from "./IconDescription"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

export const PatientCard = ({ patient }) => {
  const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col gap-y-2 p-4 rounded-md border border-slate-200">

      <article className="w-full flex gap-x-4">
        <Avatar className="size-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="foto del paciente"
          />
        </Avatar>

        <div
          id="patient-info"
          className="w-full flex flex-col gap-y-2"
        >

          <h3 className="text-slate-900 font-medium text-lg">{patient.name[0].given[0]} {patient.name[0].family}</h3>
          <div className="h-0.5 bg-slate-100" />
          <div className="flex flex-col gap-y-2">
            <IconDescription icon={<Calendar className="size-4" />} description={`Nacimiento: ${patient.birthDate}`} />
            <IconDescription icon={<Phone className="size-4" />} description={`Teléfono: ${patient.telecom[0].value}`} />
          </div>

        </div>

      </article>

      <Button variant="text" size="sm" className="self-center mt-2" onClick={() => navigate("/profile")}>
        Ver Perfil Completo
      </Button>

    </div>
  )
}