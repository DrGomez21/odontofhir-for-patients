export const consultasList = [
  {
    resourceType: "Encounter",
    id: "ConsultaOdontologica-JuanInternacional-1",
    meta: {
      profile: ["https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"]
    },
    text: { status: "generated", div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Encounter ConsultaOdontologica-JuanInternacional-1</b></p><a name=\"ConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"hcConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"ConsultaOdontologica-JuanInternacional-1-en-US\"> </a><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\"/><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-OdontoFHIR-ConsultaOdontologica-Encounter-1.html\">Encuentro Odontológico</a></p></div><p><b>status</b>: Finished</p><p><b>class</b>: <a href=\"http://terminology.hl7.org/6.1.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB\">ActCode AMB</a>: ambulatory</p><p><b>subject</b>: <code>Paciente Juan Sanchez</code></p><h3>Participants</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Individual</b></td></tr><tr><td style=\"display: none\">*</td><td><code>Doctora Erika</code></td></tr></table><p><b>period</b>: 2023-04-15 09:00:00-0300 --&gt; 2023-04-15 10:00:00-0300</p><p><b>reasonReference</b>: <code>/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto</code></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-dolordiente</code></p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-absceso</code></p></blockquote></div>" },
    status: "finished",
    "class": {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "AMB",
      display: "ambulatory"
    },
    subject: { reference: "/patient-pacientejuansanchezescenario1", display: "Paciente Juan Sanchez" },
    participant: [
      {
        individual: { reference: "/practitioner-profesionalodontologodraerikaescenario1", display: "Doctora Erika" }
      }
    ],
    period: { start: "2023-04-15T09:00:00-03:00", end: "2023-04-15T10:00:00-03:00" },
    reasonReference: [
      { reference: "/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto" }
    ],
    diagnosis: [
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-dolordiente" }
      },
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-absceso" }
      }
    ]
  },
  {
    resourceType: "Encounter",
    id: "ConsultaOdontologica-JuanInternacional-1",
    meta: {
      profile: ["https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"]
    },
    text: { status: "generated", div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Encounter ConsultaOdontologica-JuanInternacional-1</b></p><a name=\"ConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"hcConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"ConsultaOdontologica-JuanInternacional-1-en-US\"> </a><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\"/><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-OdontoFHIR-ConsultaOdontologica-Encounter-1.html\">Encuentro Odontológico</a></p></div><p><b>status</b>: Finished</p><p><b>class</b>: <a href=\"http://terminology.hl7.org/6.1.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB\">ActCode AMB</a>: ambulatory</p><p><b>subject</b>: <code>Paciente Juan Sanchez</code></p><h3>Participants</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Individual</b></td></tr><tr><td style=\"display: none\">*</td><td><code>Doctora Erika</code></td></tr></table><p><b>period</b>: 2023-04-15 09:00:00-0300 --&gt; 2023-04-15 10:00:00-0300</p><p><b>reasonReference</b>: <code>/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto</code></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-dolordiente</code></p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-absceso</code></p></blockquote></div>" },
    status: "finished",
    "class": {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "AMB",
      display: "ambulatory"
    },
    subject: { reference: "/patient-pacientejuansanchezescenario1", display: "Paciente Juan Sanchez" },
    participant: [
      {
        individual: { reference: "/practitioner-profesionalodontologodraerikaescenario1", display: "Doctora Erika" }
      }
    ],
    period: { start: "2023-04-15T09:00:00-03:00", end: "2023-04-15T10:00:00-03:00" },
    reasonReference: [
      { reference: "/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto" }
    ],
    diagnosis: [
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-dolordiente" }
      },
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-absceso" }
      }
    ]
  },
  {
    resourceType: "Encounter",
    id: "ConsultaOdontologica-JuanInternacional-1",
    meta: {
      profile: ["https://odontofhir.py/fhir/StructureDefinition/OdontoFHIR-ConsultaOdontologica-Encounter-1"]
    },
    text: { status: "generated", div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p class=\"res-header-id\"><b>Generated Narrative: Encounter ConsultaOdontologica-JuanInternacional-1</b></p><a name=\"ConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"hcConsultaOdontologica-JuanInternacional-1\"> </a><a name=\"ConsultaOdontologica-JuanInternacional-1-en-US\"> </a><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\"/><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-OdontoFHIR-ConsultaOdontologica-Encounter-1.html\">Encuentro Odontológico</a></p></div><p><b>status</b>: Finished</p><p><b>class</b>: <a href=\"http://terminology.hl7.org/6.1.0/CodeSystem-v3-ActCode.html#v3-ActCode-AMB\">ActCode AMB</a>: ambulatory</p><p><b>subject</b>: <code>Paciente Juan Sanchez</code></p><h3>Participants</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Individual</b></td></tr><tr><td style=\"display: none\">*</td><td><code>Doctora Erika</code></td></tr></table><p><b>period</b>: 2023-04-15 09:00:00-0300 --&gt; 2023-04-15 10:00:00-0300</p><p><b>reasonReference</b>: <code>/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto</code></p><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-dolordiente</code></p></blockquote><blockquote><p><b>diagnosis</b></p><p><b>condition</b>: <code>/condition-hallazgoodontologico-juaninternacional-absceso</code></p></blockquote></div>" },
    status: "finished",
    "class": {
      system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
      code: "AMB",
      display: "ambulatory"
    },
    subject: { reference: "/patient-pacientejuansanchezescenario1", display: "Paciente Juan Sanchez" },
    participant: [
      {
        individual: { reference: "/practitioner-profesionalodontologodraerikaescenario1", display: "Doctora Erika" }
      }
    ],
    period: { start: "2023-04-15T09:00:00-03:00", end: "2023-04-15T10:00:00-03:00" },
    reasonReference: [
      { reference: "/procedure-procedimientoodontologico-juaninternacional-tratamientoconducto" }
    ],
    diagnosis: [
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-dolordiente" }
      },
      {
        condition: { reference: "/condition-hallazgoodontologico-juaninternacional-absceso" }
      }
    ]
  },
]