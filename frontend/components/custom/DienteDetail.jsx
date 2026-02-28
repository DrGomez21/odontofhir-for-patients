import Diente from "@/src/assets/diente.svg"
import { IconDescription } from "./IconDescription"
import { Edit } from "lucide-react"

export const DienteDetail = ({ titulo, diente }) => {

  // Este componente es un placeholder. En una versión futura, obtener desde el servidor la información del diente afectado, y mostrarlo gráficamente.


  return (
    <div className="flex flex-col gap-y-1">
      <IconDescription
        icon={<Edit className="size-4" />}
        description={titulo}
        type="detalle"
      />

      <div className="flex gap-x-1 items-center pl-4">
        <img src={Diente} className="size-4" />
        <span className="text-slate-400 text-sm">{diente}</span>
      </div>

    </div>
  )

}