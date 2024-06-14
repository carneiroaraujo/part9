import { useState } from "react"
import { useField } from "./utils"
import { EntryFormValues } from "../../../types"

interface Props {
  onSubmit(object:EntryFormValues):void
}

export default function HospitalForm({onSubmit}: Props) {
  const date = useField({type:"date"})
  const specialist = useField()
  const description = useField()
  const diagnosisCode = useField()
  const employerName = useField()

  const dischargeDate = useField({type: "date"})
  const dischargeCriteria = useField()

  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([])

  function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault()
    onSubmit({
      type: "Hospital",
      diagnosisCodes: diagnosisCodes,
      date: date.value,
      specialist: specialist.value,
      description: description.value,
      discharge: {date: dischargeDate.value, criteria: dischargeCriteria.value}
    });
    
  }
  function appendDiagnosisCode() {
    setDiagnosisCodes(diagnosisCodes.concat(diagnosisCode.value))
  }

  return (
    <div>
      <h2>New Hospital entry</h2>
      <form onSubmit={handleSubmit}>
      <div>date: <input {...date} /></div>
      <div>specialist: <input {...specialist} /></div>
      <div>description: <input {...description} /></div>
      <div>diagnosis code: <input {...diagnosisCode} /> 
      <button type="button" onClick={appendDiagnosisCode}>append</button>
      {diagnosisCodes.join(", ")}
      </div>
      <div>employer name: <input {...employerName} /></div>
      <div>discharge date: <input {...dischargeDate} /></div>
      <div>discharge criteria: <input {...dischargeCriteria} /></div>
      
      <button type="submit">add</button>
      </form>
    </div>
  )
}