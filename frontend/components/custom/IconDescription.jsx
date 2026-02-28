export const IconDescription = ({ icon, description, type }) => {

  if (type === "titulo") {
    return (
      <div className="w-full flex gap-x-1 items-center text-slate-900">
        {icon}
        <p className="text-sm font-medium">{description}</p>
      </div>
    )
  }

  if (type === "detalle") {
    return (
      <div className="w-full flex gap-x-1 items-center text-slate-500">
        {icon}
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
    )
  }

  return (
    <div className="w-full flex gap-x-1 items-center text-slate-500">
      {icon}
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  )

}