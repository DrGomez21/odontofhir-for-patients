import Logo from "@/src/assets/logo-header.svg"

export const Historia = ({ patient }) => {
  return (
    <div className="w-full flex justify-between p-4 rounded-md border border-slate-200">
      <div>
        <h3 className="text-slate-900 font-medium text-lg">{patient.name[0].given[0]} {patient.name[0].family}</h3>
        <span>Paciente</span>
      </div>
      <img src={Logo} alt="OdontoFhir" className="h-10 grayscale" />
    </div>
  )
}