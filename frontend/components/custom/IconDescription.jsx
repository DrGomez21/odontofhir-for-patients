export const IconDescription = ({ icon, description }) => {
  return (
    <div className="w-full flex gap-x-1 items-center text-slate-500">
      {icon}
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  )
}