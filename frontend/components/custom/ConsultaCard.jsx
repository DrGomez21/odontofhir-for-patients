import { Button } from "@/components/ui/button"
import icon from "@/src/assets/icon-consulta.svg"
import { IconDescription } from "./IconDescription"
import { Calendar } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const ConsultaCard = ({ consulta, showBadge }) => {
  const navigate = useNavigate()

  const goToDetails = () => {
    // Aquí iría la lógica para navegar a la página de detalles de la consulta, pasando el ID de la consulta como parámetro.
    navigate(`/consultas/${consulta.id}`)
  }

  return (
    <div className="w-full flex flex-col gap-y-2 p-4 rounded-md border border-slate-200">

      <article className="w-full flex gap-x-4">
        <img src={icon} className="size-10" />

        <div
          id="consulta-info"
          className="w-full flex flex-col gap-y-2"
        >

          <h3 className="text-slate-900 font-medium text-lg line-clamp-1">Consulta odontológica</h3>
          <div className="flex justify-between">
            <IconDescription
              icon={<Calendar className="size-4" />}
              description={`${new Date(consulta.period.start).toLocaleDateString()}`}
            />
            {showBadge && <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">{consulta.status == "finished" ? "Finalizada" : "En curso"}</span>}
          </div>
        </div>
      </article>

      <Button
        variant="text"
        size="sm"
        className={`${showBadge ? "self-center mt-2" : "self-start mt-2"}`}
        onClick={goToDetails}
      >
        Ver detalles
      </Button>
    </div>
  )
}
