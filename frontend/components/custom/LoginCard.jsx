import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"
import Logo from "@/src/assets/login-logo.svg"

export const LoginCard = ({ onSubmit }) => {
  return (
    <div className="w-91 bg-slate-50 py-12 px-4 border border-slate-200 rounded-xl flex flex-col items-center gap-y-12 relative">

      <img src={Logo} alt="OdontoFhir" className="w-20 absolute -top-12" />

      <div className="flex flex-col items-center gap-y-2">
        <h1 className="text-slate-900 font-semibold text-xl text-center">Bienvenido a OdontoFhir</h1>
        <span className="text-slate-500 text-sm text-center">Necesitás tu identificador de paciente para ingresar. Solicitale al odontólogo al consultar.</span>
      </div>

      <form className="w-full space-y-12" onSubmit={onSubmit}>
        <Field>
          <FieldLabel htmlFor="patient-identifier">Paciente <span className="text-destructive">*</span></FieldLabel>
          <Input id="patient-identifier" type="text" placeholder="Identificador" className={`bg-white h-10`} required />
          <FieldDescription>Ingresá tu identificador de paciente</FieldDescription>
        </Field>

        <Button className="w-full" type="submit">Ingresar</Button>
      </form>

    </div>
  )
}