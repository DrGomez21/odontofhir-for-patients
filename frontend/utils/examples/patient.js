export const patient = {
  resourceType: "Patient",
  id: "PacienteJuanSanchezEscenario1",
  meta: {
    profile: ["https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-PacienteOdontologico-Patient-1"]
  },
  text: { status: "generated", div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Paciente: Juan Sanchez - Nacimiento 2003-06-14</p></div>" },
  extension: [
    {
      url: "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-Nacionalidad",
      valueCodeableConcept: {
        coding: [
          {
            system: "https://odontofhir.py/fhir/CodeSystem/Nacionalidad-OdontoFHIR-1",
            code: "600",
            display: "Paraguay"
          }
        ]
      }
    },
    {
      url: "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-PueblosIndigenas",
      valueCodeableConcept: {
        coding: [
          {
            system: "https://odontofhir.py/fhir/CodeSystem/PueblosIndigenas-OdontoFHIR-1",
            code: "0",
            display: "NO APLICA"
          }
        ]
      }
    }
  ],
  identifier: [
    {
      type: {
        coding: [
          { system: "https://odontofhir.py/fhir/CodeSystem/DocumentoIdentidad-OdontoFHIR-1", code: "CI" }
        ]
      },
      system: "https://odontofhir.py/id/ci",
      value: "7077077"
    }
  ],
  name: [
    {
      use: "official",
      family: "Sánchez",
      _family: {
        extension: [
          { url: "http://hl7.org/fhir/StructureDefinition/humanname-mothers-family", valueString: "OdontoFHIR" }
        ]
      },
      given: ["Juan"]
    }
  ],
  telecom: [
    { system: "phone", value: "0991123456" },
    { system: "email", value: "juan@example.com" }
  ],
  gender: "male",
  birthDate: "2003-06-14",
  address: [
    {
      extension: [
        {
          extension: [
            {
              url: "departamento",
              valueCodeableConcept: {
                coding: [
                  { system: "https://odontofhir.py/fhir/CodeSystem/Departamento-OdontoFHIR-1", code: "11" }
                ]
              }
            },
            {
              url: "ciudad",
              valueCodeableConcept: {
                coding: [
                  { system: "https://odontofhir.py/fhir/CodeSystem/Ciudad-OdontoFHIR-1", code: "1102" }
                ]
              }
            },
            {
              url: "barrio",
              valueCodeableConcept: {
                coding: [
                  { system: "https://odontofhir.py/fhir/CodeSystem/Barrio-OdontoFHIR-1", code: "1102037" }
                ]
              }
            },
            { url: "numeroCasa", valueInteger: 444 }
          ],
          url: "https://odontofhir.py/fhir/StructureDefinition/Extension-OdontoFHIR-DireccionPYPaciente-1"
        }
      ]
    }
  ]
}