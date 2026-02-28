import Logo from "@/src/assets/logo-header.svg"

export const HeaderApp = () => {
  return (
    <header className="w-full py-6 flex items-center justify-center bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <img src={Logo} alt="OdontoFhir" className="h-12" />
    </header>
  )
}