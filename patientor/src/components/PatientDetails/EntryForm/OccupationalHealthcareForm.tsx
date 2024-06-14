import { useState } from "react"
import { useField } from "./utils"
import { EntryFormValues } from "../../../types"

interface Props {
  onSubmit(object:EntryFormValues):void
}

export default function OccupationalHealthcareForm({onSubmit}: Props) {
  const date = useField({type:"date"})
  const specialist = useField()
  const description = useField()
  const diagnosisCode = useField()
  const employerName = useField()

  const sickeLeaveStart = useField({type: "date"})
  const sickeLeaveEnd = useField({type: "date"})

  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([])

  function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault()
    onSubmit({
      type: "OccupationalHealthcare",
      diagnosisCodes: diagnosisCodes,
      date: date.value,
      specialist: specialist.value,
      description: description.value,
      employerName: employerName.value,
      sickLeave: {startDate: sickeLeaveStart.value, endDate: sickeLeaveEnd.value}
    });
    
  }
  function appendDiagnosisCode() {
    setDiagnosisCodes(diagnosisCodes.concat(diagnosisCode.value))
  }

  return (
    <div>
      <h2>New Occupational Healthcare entry</h2>
      <form onSubmit={handleSubmit}>
      <div>date: <input {...date} /></div>
      <div>specialist: <input {...specialist} /></div>
      <div>description: <input {...description} /></div>
      <div>diagnosis code: <input {...diagnosisCode} /> 
      <button type="button" onClick={appendDiagnosisCode}>append</button>
      {diagnosisCodes.join(", ")}
      </div>
      <div>employer name: <input {...employerName} /></div>
      <div>sick leave start: <input {...sickeLeaveStart} /></div>
      <div>sick leave end: <input {...sickeLeaveEnd} /></div>
      
      <button type="submit">add</button>
      </form>
    </div>
  )
}