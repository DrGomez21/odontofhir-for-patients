export const TitleDescription = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h2 className="text-slate-900 font-semibold text-xl mb-1">{title}</h2>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  )
}